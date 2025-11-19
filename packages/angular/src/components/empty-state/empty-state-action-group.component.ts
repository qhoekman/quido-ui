import { Component } from '@angular/core';

@Component({
  selector: '[pui-empty-state-action-group]',
  host: {
    'data-testid': 'pui-empty-state-action-group',
  },
  template: '<ng-content></ng-content>',
  styles: [
    `
      /* stylelint-disable selector-pseudo-element-no-unknown */
      :host {
        display: flex;
        gap: var(--spacing-2);
      }

      :host ::ng-deep * {
        width: 100%;
      }
    `,
  ],
  standalone: true,
})
export class EmptyStateActionGroupComponent {}
