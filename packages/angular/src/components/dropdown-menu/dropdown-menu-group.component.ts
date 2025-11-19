import { Component } from '@angular/core';

@Component({
  selector: '[qui-dropdown-menu-group]',
  template: `<ng-content></ng-content>`,
  standalone: true,
  host: {
    role: 'group',
    'data-testid': 'qui-dropdown-menu-group',
  },
  styles: [
    `
      :host {
        padding: 0;
        margin: 0;
        max-height: var(--spacing-72);
        overflow: hidden auto;
      }
    `,
  ],
})
export class DropdownMenuGroupComponent {}
