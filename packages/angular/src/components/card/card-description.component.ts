import { Component } from '@angular/core';

@Component({
  selector: '[qui-card-description]',
  template: `<ng-content></ng-content>`,
  host: {
    'data-testid': 'qui-card-description',
  },
  styles: [
    `
      :host {
        font-size: var(--font-size-sm);
        color: var(--color-muted-fg);
        margin: 0;
      }
    `,
  ],
  standalone: true,
})
export class CardDescriptionComponent {}
