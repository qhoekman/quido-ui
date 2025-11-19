import { Component } from '@angular/core';

@Component({
  selector: 'span[pui-breadcrumb-page]',
  standalone: true,
  host: {
    'data-testid': 'pui-breadcrumb-page',
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
