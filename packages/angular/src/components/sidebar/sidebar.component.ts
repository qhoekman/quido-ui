import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { DrawerContentComponent } from '../drawer/drawer-content.component';
import { DrawerOverlayComponent } from '../drawer/drawer-overlay.component';
import { DrawerComponent } from '../drawer/drawer.component';
import { SidebarViewportComponent } from './sidebar-viewport.component';
import { SidebarService } from './sidebar.service';

export type SidebarVariants = {
  side?: 'left' | 'right';
  variant?: 'sidebar' | 'floating' | 'inset';
  collapsible?: 'offcanvas' | 'icon' | 'none';
};

@Component({
  selector: 'div[qui-sidebar]',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'data-sidebar': 'sidebar',
    'data-testid': 'qui-sidebar',
    '[class]': 'getClassList()',
  },
  imports: [
    CommonModule,
    DrawerComponent,
    DrawerOverlayComponent,
    DrawerContentComponent,
  ],
  template: `
    <ng-container *ngIf="collapsible === 'none'; else sidebar">
      <div class="sidebar collapsible--none"></div>
    </ng-container>
    <ng-template #sidebar>
      <ng-container *ngIf="isMobile$ | async; else desktop">
        <div
          qui-drawer
          #drawer
          [opened]="openMobile$ | async"
          variant="over"
          position="left"
          [hasBackdrop]="true"
          style="--drawer-width:16rem;"
        >
          <ng-template #drawerContent>
            <div class="sidebar-drawer">
              <div class="sidebar-drawer-content">
                <ng-container *ngTemplateOutlet="content"></ng-container>
              </div>
            </div>
          </ng-template>
        </div>
      </ng-container>
      <ng-template #desktop>
        <div class="sidebar-backdrop"></div>
        <div class="sidebar-fixed">
          <div class="sidebar-content" data-sidebar="sidebar">
            <ng-container *ngTemplateOutlet="content"></ng-container>
          </div>
        </div>
      </ng-template>
    </ng-template>
    <ng-template #content>
      <ng-content></ng-content>
    </ng-template>
  `,
  styles: [
    `
      :host {
        --sidebar-width: var(--spacing-64);
        --sidebar-width-icon: var(--spacing-12);
        --sidebar-width-mobile: var(--spacing-64);
        display: contents;
      }

      .sidebar-backdrop {
        position: relative;
        height: var(--size-svh);
        width: var(--sidebar-width);
        background-color: transparent;
        transition: width var(--duration-200) ease-in-out;
      }

      :host-context(.state--collapsed) .sidebar-backdrop {
        width: var(--sidebar-width-icon);
      }

      :host-context(.state--collapsed.collapsible--offcanvas)
        .sidebar-backdrop {
        width: 0;
      }

      :host-context(.side--right) .sidebar-backdrop {
        transform: rotate(180deg);
      }

      :host-context(.variant--floating) .sidebar-backdrop,
      :host-context(.variant--inset) .sidebar-backdrop {
        width: calc(var(--sidebar-width-icon) + var(--spacing-4));
      }

      .sidebar-fixed {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        z-index: var(--z-index-10);
        display: none;
        height: var(--size-svh);
        width: var(--sidebar-width);
        transition: all var(--duration-200) ease-in-out;
      }

      :host-context(.state--collapsed) .sidebar-fixed {
        width: var(--sidebar-width-icon);
      }

      :host-context(.variant--floating) .sidebar-fixed,
      :host-context(.variant--inset) .sidebar-fixed {
        padding: var(--spacing-2);
      }

      :host-context(.side--left) .sidebar-fixed {
        left: 0;
      }

      :host-context(.side--right) .sidebar-fixed {
        right: 0;
        left: auto;
      }

      :host-context(.side--left.state--collapsed.collapsible--offcanvas)
        .sidebar-fixed {
        left: calc(var(--sidebar-width) * -1);
      }

      :host-context(.side--right.state--collapsed.collapsible--offcanvas)
        .sidebar-fixed {
        right: calc(var(--sidebar-width) * -1);
      }

      :host-context(.variant--floating.state--collapsed) .sidebar-fixed,
      :host-context(.variant--inset.state--collapsed) .sidebar-fixed {
        width: calc(var(--sidebar-width-icon) + var(--spacing-4));
      }

      :host-context(:not(.variant--floating, .variant--inset).side--left) {
        border-right: var(--border-width-default) solid var(--color-border);
      }

      :host-context(:not(.variant--floating, .variant--inset).side--right) {
        border-left: var(--border-width-default) solid var(--color-border);
      }

      .sidebar-content {
        display: flex;
        height: 100%;
        width: 100%;
        flex-direction: column;
        background-color: var(--color-sidebar);
        transition: width var(--duration-200) ease-in-out;
      }

      :host-context(.variant--floating) .sidebar-content {
        border-radius: var(--spacing-2);
        border: var(--border-width-default) solid var(--color-sidebar-border);
        box-shadow: var(--box-shadow-default-0), var(--box-shadow-default-1);
      }

      .sidebar-drawer {
        width: var(--sidebar-width);
        background-color: var(--color-sidebar);
        padding: 0;
        color: var(--color-sidebar-foreground);

        & > button {
          display: none;
        }
      }

      .sidebar-drawer-content {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
      }

      @media (width >= 768px) {
        :host {
          display: block;
        }

        :host .sidebar-fixed {
          display: flex;
        }
      }
    `,
  ],
})
export class SidebarComponent implements OnInit, OnDestroy {
  @Input() side: SidebarVariants['side'] = 'left';
  @Input() variant: SidebarVariants['variant'] = 'sidebar';
  @Input() collapsible: SidebarVariants['collapsible'] = 'offcanvas';

  private destroy$ = new Subject<void>();
  private isMobile = new BehaviorSubject<boolean>(false);
  protected isMobile$ = this.isMobile.asObservable();
  private state = new BehaviorSubject<'collapsed' | 'expanded'>('collapsed');
  protected state$ = this.state.asObservable();
  private open = new BehaviorSubject<boolean>(false);
  protected open$ = this.open.asObservable();
  private openMobile = new BehaviorSubject<boolean>(false);
  protected openMobile$ = this.openMobile.asObservable();

  constructor(
    private sidebarService: SidebarService,
    private sidebarViewport: SidebarViewportComponent,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.setupSubscriptions();
    this.setupViewport();
  }

  private setupSubscriptions(): void {
    this.sidebarService.isMobile$
      .pipe(takeUntil(this.destroy$))
      .subscribe((isMobile) => {
        this.isMobile.next(isMobile);
        this.cdr.markForCheck();
      });

    this.sidebarService.sidebarState$
      .pipe(takeUntil(this.destroy$))
      .subscribe((state) => {
        this.state.next(state);
        this.cdr.markForCheck();
      });

    this.sidebarService.openMobile$
      .pipe(takeUntil(this.destroy$))
      .subscribe((open) => {
        this.openMobile.next(open);
        this.cdr.markForCheck();
      });

    this.sidebarService.open$
      .pipe(takeUntil(this.destroy$))
      .subscribe((open) => {
        this.open.next(open);
        this.cdr.markForCheck();
      });
  }

  private setupViewport(): void {
    this.sidebarViewport.setSidebarWidth('var(--spacing-64)');
    this.sidebarViewport.setSidebarWidthIcon('var(--spacing-16)');
    this.sidebarViewport.setSidebarWidthMobile('var(--spacing-64)');
  }

  getClassList() {
    return {
      sidebar: true,
      [`state--${this.state.value}`]: true,
      [`variant--${this.variant}`]: true,
      [`side--${this.side}`]: true,
      [`collapsible--${this.collapsible}`]: this.state.value === 'collapsed',
    };
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
