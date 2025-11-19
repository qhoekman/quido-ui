import { Component } from '@angular/core';

@Component({
  selector: 'a[pui-breadcrumb-link]',
  standalone: true,
  host: {
    'data-testid': 'pui-breadcrumb-link',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        color: inherit;
        font-weight: var(--font-weight-medium);
        font-size: var(--font-size-sm);
        text-decoration: none;
        transition: color 0.2s ease-in-out;
        padding-bottom: var(--spacing-1);

        &:hover {
          color: var(--color-background-fg);
        }
      }
    `,
  ],
})
export class BreadcrumbLinkComponent {}
