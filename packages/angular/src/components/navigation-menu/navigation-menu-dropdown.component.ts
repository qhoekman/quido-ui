import { Component } from '@angular/core';

@Component({
  selector: '[pui-navigation-menu-dropdown]',
  host: {
    'data-testid': 'pui-navigation-menu-dropdown',
  },
  template: '<ng-content></ng-content>',
  standalone: true,
})
export class NavigationMenuDropdownComponent {}
