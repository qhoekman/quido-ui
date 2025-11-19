import { Component } from '@angular/core';

@Component({
  selector: 'p[pui-statistic-helper-text], span[pui-statistic-helper-text]',
  template: `<ng-content></ng-content>`,
  host: {
    'data-testid': 'pui-statistic-helper-text',
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
