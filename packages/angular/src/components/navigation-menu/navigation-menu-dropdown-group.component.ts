import { CdkMenuGroup } from '@angular/cdk/menu';
import { Component } from '@angular/core';

@Component({
  selector: '[pui-navigation-menu-dropdown-group]',
  template: '<ng-content></ng-content>',
  host: {
    'data-testid': 'pui-navigation-menu-dropdown-group',
  },
  hostDirectives: [CdkMenuGroup],
  styles: [
    `
      :host {
        padding: 0;
        margin: 0;
        overflow: hidden auto;
      }
    `,
  ],
  standalone: true,
})
export class NavigationMenuDropdownGroupComponent {}
