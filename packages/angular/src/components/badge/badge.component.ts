import { Component, Input } from '@angular/core';

export type BadgeVariants = {
  variant: 'primary' | 'secondary' | 'destructive' | 'outline';
  rounded: 'default' | 'full';
  size: 'xs' | 'sm' | 'md' | 'lg';
};

@Component({
  selector: 'div[pui-badge]',
  standalone: true,
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'pui-badge',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border: var(--border-width-default) solid var(--color-background-fg);
        border-radius: var(--border-radius-md);
        padding: var(--spacing-2) var(--spacing-3);
        font-size: var(--font-size-xs);
        line-height: var(--line-height-xs);
        font-weight: var(--font-weight-semibold);
        transition: colors 0.3s;
        outline: none;

        &:focus-visible {
          box-shadow:
            0 0 0 2px var(--color-ring),
            0 0 0 4px var(--background);
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
      }

      :host-context(.size--sm) {
        padding: var(--spacing-0-5) var(--spacing-1);
      }

      :host-context(.size--md) {
        padding: var(--spacing-1) var(--spacing-2);
      }

      :host-context(.size--lg) {
        font-size: var(--font-size-sm);
        line-height: var(--line-height-sm);
        padding: var(--spacing-2) var(--spacing-3);
      }

      :host-context(.rounded--full) {
        border-radius: var(--border-radius-full);
      }

      :host-context(.rounded--full.size--xs) {
        width: var(--spacing-3);
        height: var(--spacing-3);
        padding: var(--spacing-0-5);
      }

      :host-context(.rounded--full.size--sm) {
        width: var(--spacing-4);
        height: var(--spacing-4);
        padding: var(--spacing-1);
      }

      :host-context(.rounded--full.size--md) {
        width: var(--spacing-6);
        height: var(--spacing-6);
        padding: var(--spacing-1);
      }

      :host-context(.rounded--full.size--lg) {
        width: var(--spacing-8);
        height: var(--spacing-8);
        padding: var(--spacing-1);
      }
    `,
  ],
})
export class BadgeComponent {
  @Input() variant: BadgeVariants['variant'] = 'primary';
  @Input() size: BadgeVariants['size'] = 'md';
  @Input() rounded: BadgeVariants['rounded'] = 'default';

  getClassList() {
    return [`variant--${this.variant}`, `size--${this.size}`, `rounded--${this.rounded}`].join(' ');
  }
}
