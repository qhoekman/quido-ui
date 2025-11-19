import { Component } from '@angular/core';

@Component({
  selector: 'ol[qui-breadcrumb-list]',
  standalone: true,
  host: {
    'data-testid': 'qui-breadcrumb-list',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--spacing-3);
        word-break: break-word;
        font-size: var(--font-size-sm);
        color: var(--color-muted-fg);
      }

      @media (width >= 640px) {
        :host {
          gap: var(--spacing-8);
        }
      }
    `,
  ],
})
export class BreadcrumbListComponent {}
