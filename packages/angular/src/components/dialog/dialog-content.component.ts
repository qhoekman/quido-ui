import { Component } from '@angular/core';

@Component({
  selector: '[pui-dialog-content]',
  standalone: true,
  host: {
    'data-testid': 'pui-dialog-content',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        font-size: var(--font-size-md);
        margin-bottom: var(--spacing-4);
      }
    `,
  ],
})
export class DialogContentComponent {}
