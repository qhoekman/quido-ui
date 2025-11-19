import { Component } from '@angular/core';

@Component({
  selector: '[pui-header]',
  standalone: true,
  host: {
    'data-testid': 'pui-header',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: block;
        margin: 0 auto;
        margin-top: var(--spacing-24);
        max-width: var(--breakpoint-7xl);
        padding-left: var(--spacing-4);
        padding-right: var(--spacing-4);
      }

      @media (width >= 640px) {
        :host {
          margin-top: var(--spacing-32);
          padding-left: var(--spacing-6);
          padding-right: var(--spacing-6);
        }
      }

      @media (width >= 1024px) {
        :host {
          margin-top: var(--spacing-40);
          padding-left: var(--spacing-8);
          padding-right: var(--spacing-8);
        }
      }
    `,
  ],
})
export class HeaderComponent {}
