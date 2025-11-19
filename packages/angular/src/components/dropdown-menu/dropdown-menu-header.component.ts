import { Component } from '@angular/core';

@Component({
  selector: '[pui-dropdown-menu-header]',
  template: `<ng-content></ng-content>`,
  standalone: true,
  host: {
    'data-testid': 'pui-dropdown-menu-header',
  },
})
export class DropdownMenuHeaderComponent {}
