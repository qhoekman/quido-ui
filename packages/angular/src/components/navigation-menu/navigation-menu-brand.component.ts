import { Component } from '@angular/core';

@Component({
  selector: '[qui-navigation-menu-brand]',
  host: {
    'data-testid': 'qui-navigation-menu-brand',
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
