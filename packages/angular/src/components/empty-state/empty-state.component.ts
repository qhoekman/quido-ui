import { Component, Input } from '@angular/core';

type EmptyStateVariants = {
  size: 'sm' | 'md' | 'lg';
};

@Component({
  selector: '[qui-empty-state]',
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'qui-empty-state',
  },
  template: `<ng-content select="[qui-empty-state-icon]"></ng-content>
    <div class="empty-state__content" data-testid="qui-empty-state-content">
      <ng-content select="[qui-empty-state-title]"></ng-content>
      <ng-content select="[qui-empty-state-description]"></ng-content>
    </div>
    <ng-content select="[qui-empty-state-action-group]"></ng-content> `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
      }

      :host.variant--sm {
        max-width: var(--spacing-72);
        gap: var(--spacing-2);
      }

      :host.variant--md {
        max-width: var(--spacing-96);
        gap: var(--spacing-3);
      }

      :host.variant--lg {
        max-width: var(--breakpoint-sm);
        gap: var(--spacing-4);
      }

      :host .empty-state__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-1);
      }
    `,
  ],
  standalone: true,
})
export class EmptyStateComponent {
  @Input() size: EmptyStateVariants['size'] = 'md';

  getClassList() {
    return {
      'empty-state': true,
      [`variant--${this.size}`]: this.size,
    };
  }
}
