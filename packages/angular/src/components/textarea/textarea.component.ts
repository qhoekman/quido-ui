import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export type TextareaVariants = {
  size: 'sm' | 'md' | 'lg';
};

@Component({
  selector: 'textarea[qui-textarea]',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'qui-textarea',
  },
  styles: [
    `
      :host {
        display: flex;
        min-height: 80px;
        width: 100%;
        border-radius: var(--border-radius-md);
        border: 1px solid var(--color-input);
        background-color: var(--color-input);
        color: var(--color-input-fg);

        &::placeholder {
          color: var(--color-muted-fg);
        }

        &:focus-visible {
          outline: none;
          border-color: var(--color-ring);
        }

        &:disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
      }

      :host-context(.size--sm) {
        font-size: var(--font-size-xs);
        padding: var(--spacing-2) var(--spacing-3);
      }

      :host-context(.size--md) {
        font-size: var(--font-size-sm);
        padding: var(--spacing-3) var(--spacing-2);
      }

      :host-context(.size--lg) {
        font-size: var(--font-size-md);
        padding: var(--spacing-4) var(--spacing-3);
      }
    `,
  ],
})
export class TextareaComponent {
  @Input() size: TextareaVariants['size'] = 'md';

  getClassList(): string {
    return `size--${this.size}`;
  }
}
