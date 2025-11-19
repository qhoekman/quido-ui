import { Component } from '@angular/core';

@Component({
  selector: '[qui-navigation-menu-actions]',
  template: ` <ng-content></ng-content> `,
  host: {
    'data-testid': 'qui-navigation-menu-actions',
  },
  styles: [
    `
      :host {
        display: flex;
        flex: 1;
        justify-content: flex-end;
        gap: var(--spacing-4);
      }
    `,
  ],
  standalone: true,
})
export class NavigationMenuActionsComponent {}
