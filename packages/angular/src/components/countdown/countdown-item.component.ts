import { Component } from '@angular/core';

@Component({
  selector: 'span[qui-countdown-item]',
  host: {
    'data-testid': 'countdown__item',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        font-size: var(--font-size-lg);
        font-weight: var(--font-weight-bold);
      }
    `,
  ],
  standalone: true,
})
export class CountdownItemComponent {}
