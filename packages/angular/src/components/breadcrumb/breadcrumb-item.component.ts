import { Component } from '@angular/core';

@Component({
  selector: 'li[pui-breadcrumb-item]',
  standalone: true,
  host: {
    'data-testid': 'pui-breadcrumb-item',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: inline-flex;
        align-items: center;
        gap: var(--spacing-1-5);
      }
    `,
  ],
})
export class BreadcrumbItemComponent {}
