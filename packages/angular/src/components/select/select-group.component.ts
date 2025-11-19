import { Component } from '@angular/core';

@Component({
  selector: 'div[pui-select-group]',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: {
    'data-testid': 'pui-select-group',
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
