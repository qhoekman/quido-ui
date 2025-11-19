import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostBinding, Input } from '@angular/core';

export type ButtonVariants = {
  variant: 'primary' | 'secondary' | 'destructive' | 'ghost' | 'outline' | 'link';
  fullWidth?: boolean;
  size: 'sm' | 'md' | 'lg' | 'icon';
};

@Component({
  selector: 'button[pui-button], a[pui-button]',
  standalone: true,
  imports: [CommonModule],
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'pui-button',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        border: 0 none;
        gap: var(--spacing-2);
        border-radius: var(--border-radius-md);
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
        transition: colors 0.3s;
        outline: none;
        box-shadow: 0 0 0 0 var(--background);
        text-decoration: none;

        &:focus-visible {
          box-shadow:
            0 0 0 2px var(--color-ring),
            0 0 0 4px var(--background);
        }

        &:not(:disabled) {
          cursor: pointer;
        }

        &:disabled {
          pointer-events: none;
          opacity: 0.5;
        }
      }

      :host(.variant--primary) {
        background-color: var(--color-primary);
        color: var(--color-primary-fg);

        &:hover {
          background-color: hsl(from var(--color-primary) h s l / 90%);
        }
      }

      :host(.variant--secondary) {
        background-color: var(--color-secondary);
        color: var(--color-secondary-fg);

        &:hover {
          background-color: hsl(from var(--color-secondary) h s l / 90%);
        }
      }

      :host(.variant--destructive) {
        background-color: var(--color-danger);
        color: var(--color-danger-fg);

        &:hover {
          background-color: hsl(from var(--color-danger) h s l / 90%);
        }
      }

      :host(.variant--outline) {
        border: 1px solid var(--color-neutral-200);
        background-color: transparent;
        color: var(--color-background-fg);

        &:hover {
          background-color: hsl(from var(--color-background-fg) h s l / 5%);
          color: hsl(from var(--color-background-fg) h s l / 90%);
        }
      }

      :host(.variant--ghost) {
        background-color: transparent;
        color: var(--color-background-fg);

        &:hover {
          background-color: hsl(from var(--color-background-fg) h s l / 5%);
          color: var(--color-background-fg);
        }
      }

      :host(.variant--link) {
        color: var(--color-primary);
        text-decoration: underline;
        text-underline-offset: 4px;

        &:hover {
          text-decoration: underline;
        }
      }

      :host(.loading) {
        pointer-events: none;
      }

      :host(.size--sm) {
        height: var(--spacing-9);
        border-radius: var(--border-radius-md);
        padding: var(--spacing-3);
      }

      :host(.size--md) {
        height: var(--spacing-10);
        padding: var(--spacing-2) var(--spacing-4);
      }

      :host(.size--lg) {
        height: var(--spacing-11);
        border-radius: var(--border-radius-md);
        padding: var(--spacing-8);
      }

      :host(.size--icon) {
        height: var(--spacing-9);
        width: var(--spacing-9);
        padding: 0;
      }

      :host(.full-width) {
        justify-content: space-between;
        width: 100%;
      }
    `,
  ],
})
export class ButtonComponent {
  @Input() variant: ButtonVariants['variant'] = 'primary';
  @Input() size: ButtonVariants['size'] = 'md';
  @Input() fullWidth?: boolean;
  @Input() loading?: boolean;

  constructor(private elementRef: ElementRef) {}

  getClassList() {
    return {
      [`variant--${this.variant}`]: true,
      [`size--${this.size}`]: true,
      'full-width': this.fullWidth,
      loading: this.loading,
    };
  }
  @HostBinding('attr.disabled') get disabled() {
    return this.elementRef.nativeElement.disabled || this.loading ? true : undefined;
  }

  @HostBinding('attr.aria-disabled') get ariaDisabled() {
    return this.elementRef.nativeElement.disabled || this.loading ? true : undefined;
  }
}
