import { Component, Input } from '@angular/core';

@Component({
  selector: '[pui-action-sheet-content]',
  standalone: true,
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'pui-action-sheet-content',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        width: 100%;
        transition: opacity 0.3s ease;
      }

      :host(.has-backdrop.open) {
        pointer-events: none;
        opacity: 0.5;
      }
    `,
  ],
})
export class ActionSheetContentComponent {
  @Input() isOpen = false;

  getClassList() {
    return {
      'action-sheet-content': true,
      'has-backdrop': true,
      open: this.isOpen,
    };
  }
}
