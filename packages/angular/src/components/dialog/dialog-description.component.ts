import { Component } from '@angular/core';

@Component({
  selector: '[qui-dialog-description]',
  standalone: true,
  host: {
    'data-testid': 'dialog__description',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        font-size: var(--font-size-md);
      }
    `,
  ],
})
export class DialogDescriptionComponent {}
