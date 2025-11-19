import { Component, Input } from '@angular/core';

export type TextVariants = {
  variant: 'body' | 'caption' | 'label' | 'title' | 'subtitle' | 'unset';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl' | 'unset';
  weight: 'normal' | 'medium' | 'bold' | 'unset';
  color: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'muted' | 'unset';
};

@Component({
  selector: '[pui-text]',
  standalone: true,
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'pui-text',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        font-family: var(--font-family-sans);
        margin: 0;
        padding: 0;
      }

      :host-context(.size--xs) {
        font-size: var(--font-size-xs);
        line-height: var(--line-height-xs);
      }

      :host-context(.size--sm) {
        font-size: var(--font-size-sm);
        line-height: var(--line-height-sm);
      }

      :host-context(.size--md) {
        font-size: var(--font-size-base);
        line-height: var(--line-height-base);
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

      :host-context(.size--4xl) {
        font-size: var(--font-size-4xl);
        line-height: var(--line-height-4xl);
      }

      :host-context(.size--5xl) {
        font-size: var(--font-size-5xl);
        line-height: var(--line-height-5xl);
      }

      :host-context(.size--6xl) {
        font-size: var(--font-size-6xl);
        line-height: var(--line-height-6xl);
      }

      :host-context(.size--7xl) {
        font-size: var(--font-size-7xl);
        line-height: var(--line-height-7xl);
      }

      :host-context(.size--8xl) {
        font-size: var(--font-size-8xl);
        line-height: var(--line-height-8xl);
      }

      :host-context(.size--9xl) {
        font-size: var(--font-size-9xl);
        line-height: var(--line-height-9xl);
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

      :host-context(.color--success) {
        color: var(--color-green-500);
      }

      :host-context(.color--warning) {
        color: var(--color-yellow-500);
      }

      :host-context(.color--error) {
        color: var(--color-red-500);
      }

      :host-context(.color--muted) {
        color: var(--color-neutral-600);
      }

      :host-context(.variant--body) {
        font-size: var(--font-size-base);
        line-height: var(--line-height-base);
        color: var(--color-background-fg);
        font-weight: var(--font-weight-normal);
      }

      :host-context(.variant--caption) {
        font-size: var(--font-size-sm);
        line-height: var(--line-height-sm);
        color: hsl(from var(--color-background-fg) h s l / 66%);
        font-weight: var(--font-weight-normal);
      }

      :host-context(.variant--label) {
        font-size: var(--font-size-sm);
        line-height: var(--line-height-sm);
        color: hsl(from var(--color-background-fg) h s l / 66%);
        font-weight: var(--font-weight-normal);
      }

      :host-context(.variant--title) {
        font-size: var(--font-size-xl);
        line-height: var(--line-height-xl);
        color: var(--color-background-fg);
        font-weight: var(--font-weight-bold);
      }

      :host-context(.variant--subtitle) {
        font-size: var(--font-size-lg);
        line-height: var(--line-height-lg);
        color: hsl(from var(--color-background-fg) h s l / 80%);
        font-weight: var(--font-weight-bold);
      }
    `,
  ],
})
export class TextComponent {
  @Input() variant: TextVariants['variant'] = 'unset';
  @Input() size: TextVariants['size'] = 'unset';
  @Input() weight: TextVariants['weight'] = 'unset';
  @Input() color: TextVariants['color'] = 'unset';

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
