import { Component } from '@angular/core';

@Component({
  selector:
    'h1[qui-statistic-value], h2[qui-statistic-value], h3[qui-statistic-value], h4[qui-statistic-value], h5[qui-statistic-value], h6[qui-statistic-value]',
  template: `<ng-content></ng-content>`,
  host: {
    'data-testid': 'qui-statistic-value',
  },
  styles: [
    `
      :host {
        font-size: var(--font-size-2xl);
        font-weight: var(--font-weight-bold);
        letter-spacing: var(--letter-spacing-tight);
        margin: 0;
      }
    `,
  ],
  standalone: true,
})
export class StatisticValueComponent {}
