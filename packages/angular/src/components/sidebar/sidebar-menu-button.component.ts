import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { TooltipContentComponent } from '../tooltip/tooltip-content.component';
import { TooltipTriggerDirective } from '../tooltip/tooltip-trigger.directive';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { SidebarService } from './sidebar.service';

export type SidebarMenuButtonVariants = {
  variant: 'default' | 'outline';
  spacing: 'outset' | 'inset';
  size: 'sm' | 'md' | 'lg';
};

@Component({
  selector: 'button[qui-sidebar-menu-button], a[qui-sidebar-menu-button]',
  standalone: true,
  imports: [
    CommonModule,
    TooltipComponent,
    TooltipTriggerDirective,
    TooltipContentComponent,
  ],
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'qui-sidebar-menu-button',
  },
  template: `
    <ng-content></ng-content>
    <ng-container *ngIf="tooltip && !hideTooltip">
      <ng-template #tooltipTemplate>
        <div qui-tooltip-content>
          <span>{{ tooltip }}</span>
        </div>
      </ng-template>
    </ng-container>
  `,
  styles: [
    `
      :host {
        display: flex;
        width: 100%;
        align-items: center;
        gap: var(--spacing-2);
        overflow: hidden;
        background: transparent;
        border: none;
        border-radius: var(--border-radius-md);
        padding: var(--spacing-2);
        text-align: left;
        font-size: var(--font-size-sm);
        outline: none;
        color: var(--color-sidebar-fg);
        text-decoration: none;
        transition: width 0.3s, height 0.3s, padding 0.3s;

        &:hover {
          background-color: var(--color-sidebar-accent);
          color: var(--color-sidebar-accent-fg);
        }

        &:focus-visible {
          box-shadow: 0 0 0 2px var(--color-sidebar-ring);
        }

        &:active {
          background-color: var(--color-sidebar-accent);
          color: var(--color-sidebar-accent-fg);
        }

        &:disabled {
          pointer-events: none;
          opacity: 0.5;
        }
      }

      :host(.variant--outline) {
        background-color: var(--color-background);
        box-shadow: 0 0 0 1px var(--color-sidebar-border);

        &:hover {
          box-shadow: 0 0 0 1px var(--color-sidebar-accent);
        }
      }

      :host(.size--sm) {
        height: var(--spacing-7);
        font-size: var(--font-size-xs);
      }

      :host(.size--lg) {
        height: var(--spacing-12);
        font-size: var(--font-size-sm);
      }

      :host-context(.collapsible--icon) {
        width: var(--spacing-8);
        height: var(--spacing-8);
      }

      :host-context(.collapsible--icon) :host(.spacing--inset) {
        padding: var(--spacing-2);
      }

      :host-context(.collapsible--icon) :host(.spacing--outset) {
        padding: 0;
      }

      :host-context(.collapsible--icon):host(.size--lg) {
        padding: 0;
      }
    `,
  ],
})
export class SidebarMenuButtonComponent implements OnInit {
  @Input() variant: SidebarMenuButtonVariants['variant'] = 'default';
  @Input() size: SidebarMenuButtonVariants['size'] = 'md';
  @Input() spacing: SidebarMenuButtonVariants['spacing'] = 'inset';
  @Input() tooltip?: string;
  protected hideTooltip = false;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    combineLatest([
      this.sidebarService.sidebarState$,
      this.sidebarService.isMobile$,
    ]).subscribe(([sidebarState, isMobile]) => {
      this.hideTooltip = sidebarState === 'expanded' && isMobile;
    });
  }

  getClassList() {
    return {
      [`variant--${this.variant}`]: true,
      [`size--${this.size}`]: true,
      [`spacing--${this.spacing}`]: true,
    };
  }
}
