import { Component } from '@angular/core';

@Component({
  selector: '[qui-navigation-menu-dropdown]',
  host: {
    'data-testid': 'qui-navigation-menu-dropdown',
  },
  template: '<ng-content></ng-content>',
  standalone: true,
})
export class NavigationMenuDropdownComponent {}
