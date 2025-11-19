import { Component } from '@angular/core';

@Component({
  selector: '[qui-dropdown-menu]',
  host: {
    'data-testid': 'qui-dropdown-menu',
  },
  template: `<ng-content></ng-content>`,
  standalone: true,
  styles: [
    `
      :host {
        display: block;
        position: relative;
      }
    `,
  ],
})
export class DropdownMenuComponent {}
