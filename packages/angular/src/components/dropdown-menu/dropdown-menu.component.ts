import { Component } from '@angular/core';

@Component({
  selector: '[pui-dropdown-menu]',
  host: {
    'data-testid': 'pui-dropdown-menu',
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
