import { CdkMenuBar } from '@angular/cdk/menu';
import { Component, Input } from '@angular/core';

type TabNavigationVariants = {
  variant: 'default' | 'inset';
  gap: 'sm' | 'md' | 'lg' | 'none';
};

@Component({
  selector: 'ul[qui-tab-navigation]',
  template: ` <ng-content></ng-content> `,
  hostDirectives: [CdkMenuBar],
  host: {
    '[class]': 'getClassList()',
  },
  styles: [
    `
      :host {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        white-space: nowrap;
        gap: 0;
      }
      :host.variant--inset {
        background-color: var(--color-card);
        border-radius: var(--border-radius-md);
        padding: var(--spacing-2) var(--spacing-3);
      }

      :host.gap--sm {
        gap: var(--spacing-1);
      }
      :host.gap--md {
        gap: var(--spacing-2);
      }
      :host.gap--lg {
        gap: var(--spacing-3);
      }
    `,
  ],
  standalone: true,
})
export class TabNavigationComponent {
  @Input() variant: TabNavigationVariants['variant'] = 'default';
  @Input() gap: TabNavigationVariants['gap'] = 'none';
  getClassList() {
    return {
      [`variant--${this.variant}`]: true,
      [`gap--${this.gap}`]: true,
    };
  }
}
