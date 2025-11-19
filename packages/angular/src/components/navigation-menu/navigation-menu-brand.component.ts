import { Component } from '@angular/core';

@Component({
  selector: '[pui-navigation-menu-brand]',
  host: {
    'data-testid': 'pui-navigation-menu-brand',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        display: flex;
      }
    `,
  ],
  standalone: true,
})
export class NavigationMenuBrandComponent {}
