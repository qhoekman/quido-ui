import { Component } from '@angular/core';

@Component({
  selector: '[qui-autocomplete-label]',
  standalone: true,
  host: {
    'data-testid': 'qui-autocomplete-label',
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
export class AutocompleteLabelComponent {}
