import { Component } from '@angular/core';

@Component({
  selector: '[pui-autocomplete-group]',
  standalone: true,
  host: {
    'data-testid': 'pui-autocomplete-group',
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
