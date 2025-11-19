import { Component } from '@angular/core';

@Component({
  selector: '[pui-toast-title]',
  standalone: true,
  host: {
    'data-testid': 'pui-toast-title',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-semibold);
        margin: 0;
      }
    `,
  ],
})
export class ToastTitleComponent {}
