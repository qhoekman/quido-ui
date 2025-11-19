import { Component } from '@angular/core';

@Component({
  selector: 'p[qui-statistic-label], span[qui-statistic-label]',
  host: {
    'data-testid': 'qui-statistic-label',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
        color: var(--color-muted-fg);
        margin: 0;
      }
    `,
  ],
  standalone: true,
})
export class StatisticLabelComponent {}
