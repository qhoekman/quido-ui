import { CdkMenuGroup } from '@angular/cdk/menu';
import { Component } from '@angular/core';

@Component({
  selector: '[pui-menubar-group]',
  host: {
    'data-testid': 'pui-menubar-group',
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
export class MenubarGroupComponent {}
