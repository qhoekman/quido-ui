import { Component } from '@angular/core';

@Component({
  selector: 'nav[pui-navigation-menu]',
  host: {
    'data-testid': 'pui-navigation-menu',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        margin-left: auto;
        margin-right: auto;
        display: flex;
        max-width: var(--breakpoint-xl);
        align-items: center;
        justify-content: space-between;
        gap: var(--spacing-4);
        padding-left: var(--spacing-8);
        padding-right: var(--spacing-8);
      }
    `,
  ],
  standalone: true,
})
export class NavigationMenuComponent {}
