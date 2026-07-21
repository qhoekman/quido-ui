import { Component } from '@angular/core';

@Component({
  selector: '[qui-dropdown-menu-header]',
  template: `<ng-content></ng-content>`,
  standalone: true,
  host: {
    'data-testid': 'dropdown-menu__header',
  },
})
export class DropdownMenuHeaderComponent {}
