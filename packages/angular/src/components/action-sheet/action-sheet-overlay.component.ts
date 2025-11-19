import { Component, Input } from '@angular/core';

@Component({
  selector: '[qui-action-sheet-overlay]',
  standalone: true,
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'qui-action-sheet-overlay',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        transition: transform 0.3s ease-in-out;
        background: var(--color-popover);
        color: var(--color-popover-fg);
        width: 100%;
        height: var(--action-sheet-height);
        z-index: 100;
        position: absolute;
        bottom: 0;
        transform: translateY(100%);
      }

      :host(.open) {
        transform: translateY(0);
      }
    `,
  ],
})
export class ActionSheetOverlayComponent {
  @Input() isOpen = false;

  getClassList() {
    return {
      'action-sheet-overlay': true,
      'has-backdrop': true,
      open: this.isOpen,
    };
  }
}
