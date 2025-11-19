import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input } from '@angular/core';

export type PasswordInputVariants = {
  size: 'sm' | 'md' | 'lg';
};

@Component({
  selector: 'input[pui-password-input]',
  standalone: true,
  imports: [CommonModule],
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'pui-password-input',
    type: 'password',
  },
  template: ``,
  styles: [
    `
      :host {
        flex: 1;
        border: none;
        outline: none;
        padding: var(--spacing-2);
        font-size: var(--font-size-sm);
        line-height: var(--line-height-sm);
        background-color: var(--color-input);
        border: var(--border-width-default) solid var(--color-border);
        color: var(--color-input-fg);
        box-sizing: border-box;
      }

      :host-context(.size--sm) {
        height: var(--spacing-3);
        padding: var(--spacing-2) var(--spacing-2);
      }

      :host-context(.size--md) {
        height: var(--spacing-5);
        padding: var(--spacing-3) var(--spacing-2);
      }

      :host-context(.size--lg) {
        height: var(--spacing-7);
        padding: var(--spacing-3) var(--spacing-3);
      }
    `,
  ],
})
export class PasswordInputComponent {
  @Input() size: PasswordInputVariants['size'] = 'md';

  constructor(public elementRef: ElementRef) {}

  getClassList() {
    return {
      [`size--${this.size}`]: true,
    };
  }
}
