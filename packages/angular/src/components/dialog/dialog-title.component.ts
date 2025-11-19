import { Component } from '@angular/core';

@Component({
  selector: '[qui-dialog-title]',
  standalone: true,
  host: {
    'data-testid': 'qui-dialog-title',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        font-size: var(--font-size-lg);
        font-weight: var(--font-weight-bold);
        margin-bottom: var(--spacing-2);
      }
    `,
  ],
})
export class DialogTitleComponent {}
