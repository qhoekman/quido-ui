import { Component } from '@angular/core';

@Component({
  selector: '[qui-navigation-menu-brand]',
  host: {
    'data-testid': 'navigation-menu__brand',
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
