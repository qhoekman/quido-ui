import { CdkMenuGroup } from '@angular/cdk/menu';
import { Component } from '@angular/core';

@Component({
  selector: '[pui-tab-navigation-menugroup]',
  host: {
    'data-testid': 'pui-tab-navigation-menugroup',
  },
  template: '<ng-content></ng-content>',
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
export class TabNavigationMenugroupComponent {}
