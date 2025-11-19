import { CdkMenuBar } from '@angular/cdk/menu';
import { Component } from '@angular/core';

@Component({
  selector: 'div[pui-tab-navigation-rail]',
  template: ` <ng-content></ng-content> `,
  hostDirectives: [CdkMenuBar],
  styles: [
    `
      :host {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: var(--border-width-default);
        background-color: var(--color-border);
        margin: 0;
        padding: 0;
      }
    `,
  ],
  standalone: true,
})
export class TabNavigationRailComponent {}
