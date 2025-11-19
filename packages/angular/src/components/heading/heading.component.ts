import { Component, Input } from '@angular/core';

export type HeadingVariants = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'unset';
  size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'unset';
  weight: 'normal' | 'medium' | 'bold' | 'unset';
  color: 'neutral' | 'primary' | 'secondary' | 'unset';
};

@Component({
  selector: '[pui-heading]',
  standalone: true,
  host: {
    '[class]': 'getClassList()',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        font-family: var(--font-family-sans);
        margin: 0;
        padding: 0;
      }

      :host-context(.size--sm) {
        font-size: var(--font-size-sm);
        line-height: var(--line-height-sm);
      }

      :host-context(.size--md) {
        font-size: var(--font-size-md);
        line-height: var(--line-height-md);
      }

      :host-context(.size--lg) {
        font-size: var(--font-size-lg);
        line-height: var(--line-height-lg);
      }

      :host-context(.size--xl) {
        font-size: var(--font-size-xl);
        line-height: var(--line-height-xl);
      }

      :host-context(.size--2xl) {
        font-size: var(--font-size-2xl);
        line-height: var(--line-height-2xl);
      }

      :host-context(.size--3xl) {
        font-size: var(--font-size-3xl);
        line-height: var(--line-height-3xl);
      }

      :host-context(.weight--normal) {
        font-weight: var(--font-weight-normal);
      }

      :host-context(.weight--medium) {
        font-weight: var(--font-weight-medium);
      }

      :host-context(.weight--bold) {
        font-weight: var(--font-weight-bold);
      }

      :host-context(.color--neutral) {
        color: var(--color-neutral-900);
      }

      :host-context(.color--primary) {
        color: var(--color-primary-500);
      }

      :host-context(.color--secondary) {
        color: var(--color-secondary-500);
      }

      :host-context(.variant--h1) {
        font-size: var(--font-size-3xl);
        line-height: var(--line-height-3xl);
        font-weight: var(--font-weight-bold);
        margin-bottom: var(--spacing-4);
      }

      :host-context(.variant--h2) {
        font-size: var(--font-size-2xl);
        line-height: var(--line-height-2xl);
        font-weight: var(--font-weight-bold);
        margin-bottom: var(--spacing-4);
      }

      :host-context(.variant--h3) {
        font-size: var(--font-size-xl);
        line-height: var(--line-height-xl);
        font-weight: var(--font-weight-bold);
        margin-bottom: var(--spacing-4);
      }

      :host-context(.variant--h4) {
        font-size: var(--font-size-lg);
        line-height: var(--line-height-lg);
        font-weight: var(--font-weight-medium);
        margin-bottom: var(--spacing-3);
      }

      :host-context(.variant--h5) {
        font-size: var(--font-size-md);
        line-height: var(--line-height-md);
        font-weight: var(--font-weight-medium);
        margin-bottom: var(--spacing-2);
      }

      :host-context(.variant--h6) {
        font-size: var(--font-size-sm);
        line-height: var(--line-height-sm);
        font-weight: var(--font-weight-medium);
        margin-bottom: var(--spacing-2);
      }
    `,
  ],
})
export class HeadingComponent {
  @Input() variant: HeadingVariants['variant'] = 'unset';
  @Input() size: HeadingVariants['size'] = 'unset';
  @Input() weight: HeadingVariants['weight'] = 'unset';
  @Input() color: HeadingVariants['color'] = 'unset';

  getClassList() {
    const classList: Record<string, string> = {
      [`variant--${this.variant}`]: this.variant,
    };

    if (!this.variant || this.variant === 'unset') {
      classList[`size--${this.size}`] = this.size;
      classList[`weight--${this.weight}`] = this.weight;
      classList[`color--${this.color}`] = this.color;
    }

    return classList;
  }
}
