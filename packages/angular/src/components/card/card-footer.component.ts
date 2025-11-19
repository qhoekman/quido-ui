import { Component } from '@angular/core';

@Component({
  selector: '[qui-card-footer]',
  host: {
    'data-testid': 'qui-card-footer',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        padding: var(--spacing-5);
        padding-top: 0;
      }
    `,
  ],
  standalone: true,
})
export class CardFooterComponent {}
