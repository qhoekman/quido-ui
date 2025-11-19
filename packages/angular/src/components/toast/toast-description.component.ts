import { Component } from '@angular/core';

@Component({
  selector: '[pui-toast-description]',
  template: `<ng-content></ng-content>`,
  standalone: true,
  host: {
    'data-testid': 'pui-toast-description',
  },
  styles: [
    `
      :host {
        font-size: var(--font-size-sm);
        opacity: 0.9;
        margin: 0;
      }
    `,
  ],
})
export class ToastDescriptionComponent {}
