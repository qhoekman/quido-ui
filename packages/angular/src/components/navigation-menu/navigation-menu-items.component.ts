import { Component } from '@angular/core';

@Component({
  selector: '[pui-navigation-menu-items]',
  host: {
    'data-testid': 'pui-navigation-menu-items',
  },
  template: '<ng-content></ng-content>',
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        gap: var(--spacing-2);
        flex: 1;
      }
    `,
  ],
  standalone: true,
})
export class NavigationMenuItemsComponent {}
