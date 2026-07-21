import { Component } from '@angular/core';

@Component({
  selector: '[qui-navigation-menu-dropdown]',
  host: {
    'data-testid': 'navigation-menu__dropdown',
  },
  template: '<ng-content></ng-content>',
  standalone: true,
})
export class NavigationMenuDropdownComponent {}
