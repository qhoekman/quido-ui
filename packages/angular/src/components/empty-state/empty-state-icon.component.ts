import { Component } from '@angular/core';

@Component({
  selector: '[pui-empty-state-icon]',
  template: '<ng-content></ng-content>',
  host: {
    'data-testid': 'pui-empty-state-icon',
  },
  styles: [
    `
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        width: 100%;
        height: 100%;
      }

      :host-context(.variant--sm) {
        max-width: var(--spacing-12);
        max-height: var(--spacing-12);
      }

      :host-context(.variant--md) {
        max-width: var(--spacing-16);
        max-height: var(--spacing-16);
      }

      :host-context(.variant--lg) {
        max-width: var(--spacing-18);
        max-height: var(--spacing-18);
      }

      :host ::ng-deep * {
        width: 100%;
        height: 100%;
      }
    `,
  ],
  standalone: true,
})
export class EmptyStateIconComponent {}
