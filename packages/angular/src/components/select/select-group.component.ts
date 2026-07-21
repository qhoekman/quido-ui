import { Component } from '@angular/core';

@Component({
  selector: 'div[qui-select-group]',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: {
    'data-testid': 'select__group',
  },
  styles: [
    `
      :host {
        padding: var(--spacing-2);
      }
    `,
  ],
})
export class SelectGroupComponent {}
