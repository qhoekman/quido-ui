import { Component } from '@angular/core';

@Component({
  selector: '[qui-card-content]',
  host: {
    'data-testid': 'qui-card-content',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        padding: var(--spacing-5);
        padding-top: 0;
      }
    `,
  ],
  standalone: true,
})
export class CardContentComponent {}
