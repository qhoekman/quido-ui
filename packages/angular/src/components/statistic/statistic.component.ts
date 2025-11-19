import { Component, Input } from '@angular/core';

export type StatisticVariants = {
  size: 'sm' | 'md' | 'lg';
};

@Component({
  selector: '[qui-statistic]',
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'qui-statistic',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        display: inline-flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
      }

      :host-context(.size--sm) {
        gap: var(--spacing-0-5);
      }

      :host-context(.size--md) {
        gap: var(--spacing-1);
      }

      :host-context(.size--lg) {
        gap: var(--spacing-2);
      }
    `,
  ],
  standalone: true,
})
export class StatisticComponent {
  @Input() size: StatisticVariants['size'] = 'md';

  getClassList() {
    return {
      [`size--${this.size}`]: true,
    };
  }
}
