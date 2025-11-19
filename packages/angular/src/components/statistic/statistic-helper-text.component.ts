import { Component } from '@angular/core';

@Component({
  selector: 'p[qui-statistic-helper-text], span[qui-statistic-helper-text]',
  template: `<ng-content></ng-content>`,
  host: {
    'data-testid': 'qui-statistic-helper-text',
  },
  styles: [
    `
      :host {
        font-size: var(--font-size-xs);
        color: var(--color-muted-fg);
        margin: 0;
      }
    `,
  ],
  standalone: true,
})
export class StatisticHelperTextComponent {}
