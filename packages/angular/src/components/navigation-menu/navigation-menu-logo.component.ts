import { Component } from '@angular/core';

@Component({
  selector: 'a[qui-navigation-menu-logo]',
  host: {
    'data-testid': 'qui-navigation-menu-logo',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        display: flex;
        color: var(--color-background-fg);
        fill: currentColor;
        height: var(--spacing-8);
      }
    `,
  ],
  standalone: true,
})
export class NavigationMenuLogoComponent {}
