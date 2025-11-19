import { Component } from '@angular/core';

@Component({
  selector: '[pui-dropdown-menu-label]',
  template: `<ng-content></ng-content>`,
  standalone: true,
  host: {
    'data-testid': 'pui-dropdown-menu-label',
  },
  styles: [
    `
      :host {
        font-weight: var(--font-weight-semibold);
        padding: var(--spacing-1-5) var(--spacing-2);
      }
    `,
  ],
})
export class DropdownMenuLabelComponent {}
