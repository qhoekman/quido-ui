import { Component } from '@angular/core';

@Component({
  selector:
    'h1[pui-statistic-value], h2[pui-statistic-value], h3[pui-statistic-value], h4[pui-statistic-value], h5[pui-statistic-value], h6[pui-statistic-value]',
  template: `<ng-content></ng-content>`,
  host: {
    'data-testid': 'pui-statistic-value',
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
