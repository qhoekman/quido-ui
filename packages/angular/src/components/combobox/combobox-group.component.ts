import { Component } from '@angular/core';

@Component({
  selector: '[qui-combobox-group]',
  standalone: true,
  host: {
    'data-testid': 'combobox__group',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        list-style: none;
        margin: 0;
        padding: 0;
      }
    `,
  ],
})
export class ComboboxGroupComponent {}
