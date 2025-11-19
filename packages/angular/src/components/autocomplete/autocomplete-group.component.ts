import { Component } from '@angular/core';

@Component({
  selector: '[qui-autocomplete-group]',
  standalone: true,
  host: {
    'data-testid': 'qui-autocomplete-group',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        padding: var(--spacing-2);
        list-style: none;
        margin: 0;
      }
    `,
  ],
})
export class AutocompleteGroupComponent {}
