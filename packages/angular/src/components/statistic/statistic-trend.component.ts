import { Component, Input } from '@angular/core';

export type StatisticTrendVariants = {
  variant: 'up' | 'down' | 'neutral';
};

@Component({
  selector: '[pui-statistic-trend]',
  template: `<ng-content></ng-content>`,
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'pui-statistic-trend',
  },
  styles: [
    `
      :host {
        display: inline-flex;
        align-items: center;
        gap: var(--spacing-1);
      }

      :host-context(.variant--up) {
        color: var(--color-emerald-600);
      }

      :host-context(.variant--down) {
        color: var(--color-red-600);
      }

      :host-context(.variant--neutral) {
        color: var(--color-gray-600);
      }
    `,
  ],
  standalone: true,
})
export class StatisticTrendComponent {
  @Input() variant: StatisticTrendVariants['variant'] = 'neutral';

  getClassList() {
    return {
      [`variant--${this.variant}`]: true,
    };
  }
}
