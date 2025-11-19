import { Component } from '@angular/core';

@Component({
  selector: '[qui-select-label]',
  standalone: true,
  host: {
    'data-testid': 'qui-select-label',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-semibold);
        margin: 0;
        margin-bottom: var(--spacing-2);
      }
    `,
  ],
})
export class SelectLabelComponent {}
