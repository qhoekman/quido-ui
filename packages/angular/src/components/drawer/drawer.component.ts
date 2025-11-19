import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ContentChild,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DrawerOverlayComponent } from './drawer-overlay.component';

export type DrawerVariants = {
  variant: 'side' | 'over' | 'push';
  position: 'left' | 'right';
  hasBackdrop: boolean | 'auto';
};

@Component({
  selector: '[pui-drawer]',
  host: {
    '[attr.data-testid]': 'pui-drawer',
    '[class]': 'getClassList()',
  },
  imports: [AsyncPipe, NgTemplateOutlet, DrawerOverlayComponent],
  template: `
    @let isOpen = this.isOpenSubject | async;
    <div
      pui-drawer-overlay
      [variant]="variant"
      [position]="position"
      [hasBackdrop]="hasBackdrop"
      [opened]="isOpen ?? false"
    >
      <ng-container *ngTemplateOutlet="drawerContent"></ng-container>
    </div>
    <ng-content select="[pui-drawer-content]"></ng-content>
  `,
  styles: [
    `
      /* stylelint-disable selector-pseudo-class-no-unknown */
      :host {
        --drawer-width: 172px;

        position: relative;
        display: flex;
        height: 100svh;
        transition: width 0.3s ease;
      }

      :host-context(.open.has-backdrop) {
        background: hsl(from var(--color-muted) h s l / 33%);
      }

      :host :ng-deep [pui-drawer-content] {
        width: 100%;
        transition:
          margin 0.3s ease,
          width 0.3s ease;
      }

      :host-context(.variant--over.open) {
        width: var(--drawer-width);
      }

      :host-context(.variant--push.position--left) :ng-deep [pui-drawer-content]:not(.open) {
        margin-left: calc(-1 * var(--drawer-width));
      }

      :host-context(.variant--push.position--right) :ng-deep [pui-drawer-content]:not(.open) {
        margin-right: calc(-1 * var(--drawer-width));
      }

      /* stylelint-disable no-descending-specificity */
      :host-context(.has-backdrop.open) :ng-deep [pui-drawer-content] {
        pointer-events: none;
        opacity: 0.5;
      }
    `,
  ],
  standalone: true,
})
export class DrawerComponent implements OnInit, OnChanges {
  @Input() hasBackdrop: DrawerVariants['hasBackdrop'] = 'auto';
  @Input() variant: DrawerVariants['variant'] = 'over';
  @Input() position: DrawerVariants['position'] = 'left';
  @Input() opened: boolean | null = null;
  @ContentChild('drawerContent') drawerContent!: TemplateRef<unknown>;
  isOpenSubject = new BehaviorSubject<boolean>(false);

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    if (this.opened !== null) {
      this.isOpenSubject.next(this.opened);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['opened']) {
      this.isOpenSubject.next(this.opened ?? false);
    }
  }

  open() {
    this.isOpenSubject.next(true);
  }

  close() {
    this.isOpenSubject.next(false);
  }

  toggle() {
    this.isOpenSubject.next(!this.isOpenSubject.value);
  }

  getHasBackdrop() {
    if (this.variant === 'side') {
      return false;
    }
    return this.isOpenSubject.value;
  }

  getClassList() {
    return {
      'has-backdrop': this.getHasBackdrop(),
      'variant--side': this.variant === 'side',
      'variant--over': this.variant === 'over',
      'variant--push': this.variant === 'push',
      'position--left': this.position === 'left',
      'position--right': this.position === 'right',
      open: this.isOpenSubject.value,
    };
  }

  getOverlayClassList() {
    return {
      drawer__overlay: true,
      ...this.getClassList(),
    };
  }

  getContentClassList() {
    return {
      drawer__content: true,
      ...this.getClassList(),
    };
  }

  @HostListener('document:keydown.escape')
  handleEscape() {
    this.close();
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent) {
    if (this.variant === 'side') {
      return;
    }
    if (this.isOpenSubject.value && this.elementRef.nativeElement === event.target) {
      this.close();
    }
  }
}
