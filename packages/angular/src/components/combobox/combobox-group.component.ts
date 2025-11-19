import { Component } from '@angular/core';

@Component({
  selector: '[pui-combobox-group]',
  standalone: true,
  host: {
    'data-testid': 'pui-combobox-group',
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
