import { Component, Input } from '@angular/core';

type CarouselButtonVariants = {
  variant: 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost';
  position: 'prev' | 'next' | 'unset';
  size: 'sm' | 'md' | 'lg' | 'icon';
};

@Component({
  selector: 'button[pui-carousel-button]',
  standalone: true,
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'pui-carousel-button',
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
        border-radius: var(--border-radius-full);
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
        height: var(--spacing-10);
        width: var(--spacing-10);
      }

      :host(.position--prev) {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }

      :host(.position--next) {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    `,
  ],
})
export class CarouselButtonComponent {
  @Input() variant: CarouselButtonVariants['variant'] = 'ghost';
  @Input() size: CarouselButtonVariants['size'] = 'sm';
  @Input() position: CarouselButtonVariants['position'] = 'unset';

  getClassList() {
    return {
      [`variant--${this.variant}`]: true,
      [`size--${this.size}`]: true,
      [`position--${this.position}`]: true,
    };
  }
}
