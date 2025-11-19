import { Component } from '@angular/core';

@Component({
  selector: '[pui-card-header]',
  host: {
    'data-testid': 'pui-card-header',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-1-5);
        padding: var(--spacing-5);
      }
    `,
  ],
  standalone: true,
})
export class CardHeaderComponent {}
