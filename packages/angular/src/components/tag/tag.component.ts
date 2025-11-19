import { Component, Input } from '@angular/core';

export type TagVariants = {
  variant: 'primary' | 'secondary' | 'destructive' | 'outline';
  shape: 'pill' | 'plate';
  size: 'xs' | 'sm' | 'md' | 'lg';
};

@Component({
  selector: 'div[pui-tag]',
  standalone: true,
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'pui-tag',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border: var(--border-width-default) solid var(--color-background-fg);
        padding: var(--spacing-2) var(--spacing-3);
        font-size: var(--font-size-xs);
        line-height: var(--line-height-xs);
        font-weight: var(--font-weight-semibold);
        transition: colors 0.3s;
        outline: none;

        &:focus-visible {
          box-shadow:
            0 0 0 2px var(--color-ring),
            0 0 0 4px var(--color-background);
        }
      }

      :host-context(.variant--primary) {
        background-color: var(--color-primary);
        color: var(--color-primary-fg);
        box-shadow: var(--box-shadow-default);
        border-color: transparent;

        &:hover {
          background-color: hsl(from var(--color-primary) h s l / 80%);
        }
      }

      :host-context(.variant--secondary) {
        background-color: var(--color-secondary);
        color: var(--color-secondary-fg);
        border-color: transparent;

        &:hover {
          background-color: hsl(from var(--color-secondary) h s l / 80%);
        }
      }

      :host-context(.variant--destructive) {
        background-color: var(--color-danger);
        color: var(--color-danger-fg);
        box-shadow: var(--box-shadow-default);
        border-color: transparent;

        &:hover {
          background-color: hsl(from var(--color-danger) h s l / 80%);
        }
      }

      :host-context(.variant--outline) {
        color: var(--color-background-fg);
      }

      :host-context(.size--xs) {
        padding: var(--spacing-0-5);
        gap: var(--spacing-1);
      }

      :host-context(.size--sm) {
        padding: var(--spacing-0-5) var(--spacing-1);
        gap: var(--spacing-1);
      }

      :host-context(.size--md) {
        padding: var(--spacing-1) var(--spacing-2);
        gap: var(--spacing-2);
      }

      :host-context(.size--lg) {
        font-size: var(--font-size-sm);
        line-height: var(--line-height-sm);
        padding: var(--spacing-2) var(--spacing-3);
        gap: var(--spacing-2);
      }

      :host-context(.shape--pill) {
        border-radius: var(--border-radius-full);
      }

      :host-context(.shape--plate) {
        border-radius: var(--border-radius-md);
      }
    `,
  ],
})
export class TagComponent {
  @Input() variant: TagVariants['variant'] = 'primary';
  @Input() size: TagVariants['size'] = 'md';
  @Input() shape: TagVariants['shape'] = 'plate';

  getClassList() {
    return {
      'pui-tag': true,
      [`variant--${this.variant}`]: true,
      [`size--${this.size}`]: true,
      [`shape--${this.shape}`]: true,
    };
  }
}
