import { Component } from '@angular/core';

@Component({
  selector: 'span[qui-breadcrumb-page]',
  standalone: true,
  host: {
    'data-testid': 'qui-breadcrumb-page',
    '[attr.aria-current]': 'page',
  },
  styles: [
    `
      :host {
        color: var(--color-background-fg);
        padding-bottom: var(--spacing-1);
      }
    `,
  ],
  template: `<ng-content></ng-content>`,
})
export class BreadcrumbPageComponent {}
