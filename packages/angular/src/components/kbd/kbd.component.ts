import { Component, Input } from '@angular/core';

export type KbdVariants = {
  variant: 'default';
  size: 'sm' | 'md' | 'lg';
};

@Component({
  selector: 'kbd[pui-kbd]',
  standalone: true,
  host: {
    'data-testid': 'pui-kbd',
    '[class]': 'getClassList()',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: inline-block;
        padding: var(--spacing-0-2) var(--spacing-0-4);
        font-size: var(--font-size-sm);
        line-height: var(--line-height-base);
        border: var(--border-width-default) solid;
        border-radius: var(--border-radius-sm);
        font-family: var(--font-family-mono);
      }

      :host-context(.variant--default) {
        background-color: var(--color-card);
        color: var(--color-card-fg);
        border-color: var(--color-border);
      }

      :host-context(.size--sm) {
        font-size: var(--font-size-xs);
        padding: var(--spacing-0-1) var(--spacing-0-3);
      }

      :host-context(.size--md) {
        font-size: var(--font-size-sm);
        padding: var(--spacing-0-2) var(--spacing-0-4);
      }

      :host-context(.size--lg) {
        font-size: var(--font-size-base);
        padding: var(--spacing-0-3) var(--spacing-0-5);
      }
    `,
  ],
})
export class KbdComponent {
  @Input() variant: KbdVariants['variant'] = 'default';
  @Input() size: KbdVariants['size'] = 'md';

  getClassList() {
    return [`variant--${this.variant}`, `size--${this.size}`].join(' ');
  }
}
