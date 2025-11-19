import { Component } from '@angular/core';

@Component({
  selector: '[qui-card-title]',
  host: {
    'data-testid': 'qui-card-title',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        font-weight: var(--font-weight-semibold);
        line-height: var(--line-height-none);
        letter-spacing: var(--letter-spacing-tight);
        margin: 0;
      }
    `,
  ],
  standalone: true,
})
export class CardTitleComponent {}
