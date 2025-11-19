import { Component } from '@angular/core';

@Component({
  selector: '[pui-dialog-footer]',
  standalone: true,
  host: {
    'data-testid': 'pui-dialog-footer',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: flex;
        justify-content: flex-end;
        gap: var(--spacing-2);
      }
    `,
  ],
})
export class DialogFooterComponent {}
