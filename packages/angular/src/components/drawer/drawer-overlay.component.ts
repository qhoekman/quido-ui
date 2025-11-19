import { Component, Input } from '@angular/core';
import { DrawerVariants } from './drawer.component';

@Component({
  selector: '[qui-drawer-overlay]',
  standalone: true,
  host: {
    '[attr.data-testid]': 'qui-drawer-overlay',
    '[class]': 'getClassList()',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        transition: width 0.3s ease-in-out, transform 0.3s ease-in-out;
        background: var(--color-popover);
        color: var(--color-popover-fg);
        width: var(--drawer-width);
        overflow: hidden;
        height: 100%;
        z-index: 100;
      }

      :host(.variant--side.position--left) {
        width: 0;
        order: -1;
      }

      :host(.variant--side.position--right) {
        order: 1;
        width: 0;
      }

      :host(.variant--over.position--left) {
        position: absolute;
        transform: translateX(-100svw);
      }

      :host(.variant--over.position--right) {
        position: absolute;
        transform: translateX(100svw);
      }

      :host(.variant--push.position--left) {
        transform: translateX(-100svw);
        order: -1;
      }

      :host(.variant--push.position--right) {
        order: 1;
        transform: translateX(100svw);
      }

      :host(.variant--side.open.position--left) {
        width: var(--drawer-width);
      }

      :host(.variant--side.open.position--right) {
        width: var(--drawer-width);
      }

      :host(.variant--over.open.position--left) {
        transform: translateX(0);
      }

      :host(.variant--over.open.position--right) {
        transform: translateX(calc(100svw - var(--drawer-width)));
      }

      :host(.variant--push.open.position--right) {
        transform: translateX(0);
      }

      :host(.variant--push.open.position--left) {
        transform: translateX(0);
      }
    `,
  ],
})
export class DrawerOverlayComponent {
  @Input() variant: DrawerVariants['variant'] = 'side';
  @Input() position: DrawerVariants['position'] = 'left';
  @Input() hasBackdrop: DrawerVariants['hasBackdrop'] = 'auto';
  @Input() opened = false;

  getClassList() {
    return {
      drawer__overlay: true,
      [`variant--${this.variant}`]: true,
      [`position--${this.position}`]: true,
      open: this.opened,
      'has-backdrop': this.hasBackdrop,
    };
  }
}
