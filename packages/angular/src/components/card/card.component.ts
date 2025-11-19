import { Component } from '@angular/core';

@Component({
  selector: '[qui-card]',
  host: {
    'data-testid': 'qui-card',
  },
  template: `<ng-content></ng-content>`,
  standalone: true,
  styles: [
    `
      :host {
        border-radius: var(--border-radius-xl);
        border-width: var(--border-width-default);
        border-color: var(--color-card);
        background-color: var(--color-card);
        color: var(--color-card-fg);
        box-shadow: var(--box-shadow-default);
      }
    `,
  ],
})
export class CardComponent {}
