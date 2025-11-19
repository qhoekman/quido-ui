import { Component } from '@angular/core';

@Component({
  selector: '[qui-empty-state-title]',
  template: '<ng-content></ng-content>',
  host: {
    'data-testid': 'qui-empty-state-title',
  },
  styles: [
    `
      :host {
        color: var(--color-background-fg);
        text-align: center;
        font-family: var(--font-family-sans);
        font-style: normal;
        font-weight: 500;
        margin: 0;
      }

      :host-context(.variant--sm) {
        font-size: var(--font-size-base);
        line-height: var(--line-height-base);
      }

      :host-context(.variant--md) {
        font-size: var(--font-size-lg);
        line-height: var(--line-height-lg);
      }

      :host-context(.variant--lg) {
        font-size: var(--font-size-2xl);
        line-height: var(--line-height-2xl);
      }
    `,
  ],
  standalone: true,
})
export class EmptyStateTitleComponent {}
