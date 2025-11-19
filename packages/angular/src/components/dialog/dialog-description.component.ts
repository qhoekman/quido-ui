import { Component } from '@angular/core';

@Component({
  selector: '[pui-dialog-description]',
  standalone: true,
  host: {
    'data-testid': 'pui-dialog-description',
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
