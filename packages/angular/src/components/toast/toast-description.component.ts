import { Component } from '@angular/core';

@Component({
  selector: '[qui-toast-description]',
  template: `<ng-content></ng-content>`,
  standalone: true,
  host: {
    'data-testid': 'qui-toast-description',
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
