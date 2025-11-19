import { Component } from '@angular/core';

@Component({
  selector: 'div[qui-select-group]',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: {
    'data-testid': 'qui-select-group',
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
