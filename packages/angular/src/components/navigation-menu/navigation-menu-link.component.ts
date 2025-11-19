import { Component } from '@angular/core';

@Component({
  selector: 'a[qui-navigation-menu-link]',
  host: {
    'data-testid': 'qui-navigation-menu-link',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-semibold);
        line-height: var(--line-height-6);
        color: var(--color-background-fg);
      }

      :host:visited {
        color: var(--color-background-fg);
      }

      :host:link {
        color: var(--color-background-fg);
      }

      :host(:hover) {
        background-color: var(--color-muted);
      }
    `,
  ],
  standalone: true,
})
export class NavigationMenuLinkComponent {}
