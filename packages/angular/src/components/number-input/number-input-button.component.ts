import { Component, Input } from '@angular/core';
import { NumberInputFieldVariants } from './number-inputfield.component';

@Component({
  selector: 'button[pui-number-input-button]',
  standalone: true,
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'pui-number-input-button',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        background-color: var(--color-input);
        border: var(--border-width-default) solid var(--color-border);
        color: var(--color-input-fg);
        cursor: pointer;
        transition:
          background-color 0.2s,
          color 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
      }

      :host:hover {
        background-color: var(--color-gray-100);
        color: var(--color-gray-900);
      }

      :host:focus-visible {
        outline: none;
        box-shadow:
          0 0 0 var(--border-width-2) var(--color-ring),
          0 0 0 var(--border-width-4) var(--color-muted);
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: 0.5;
      }

      :host-context(.size--sm) {
        padding: var(--spacing-2) var(--spacing-2);
      }

      :host-context(.size--md) {
        padding: var(--spacing-3) var(--spacing-2);
      }

      :host-context(.size--lg) {
        padding: var(--spacing-3) var(--spacing-3);
      }

      :host(.size--icon) {
        height: var(--spacing-10);
        width: var(--spacing-10);
      }
    `,
  ],
})
export class NumberInputButtonComponent {
  @Input() size: NumberInputFieldVariants['size'] = 'md';

  getClassList() {
    return {
      [`size--${this.size}`]: true,
    };
  }
}
