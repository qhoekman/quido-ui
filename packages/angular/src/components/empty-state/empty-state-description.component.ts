import { Component } from '@angular/core';

@Component({
  selector: '[qui-empty-state-description]',
  host: {
    'data-testid': 'qui-empty-state-description',
  },
  template: '<ng-content></ng-content>',
  styles: [
    `
      :host {
        color: var(--color-background-fg);
        text-align: center;
        font-family: var(--font-family-sans);
        font-style: normal;
        font-weight: 400;
        margin: 0;
        padding: 0 var(--spacing-2);
      }

      :host-context(.variant--sm) {
        font-size: var(--font-size-sm);
        line-height: var(--line-height-sm);
      }

      :host-context(.variant--md) {
        font-size: var(--font-size-base);
        line-height: var(--line-height-base);
      }

      :host-context(.variant--lg) {
        font-size: var(--font-size-lg);
        line-height: var(--line-height-lg);
      }
    `,
  ],
  standalone: true,
})
export class EmptyStateDescriptionComponent {}
