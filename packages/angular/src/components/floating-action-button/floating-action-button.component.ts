import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'button[pui-fab], a[pui-fab]',
  standalone: true,
  imports: [CommonModule],
  host: {
    '[class]': 'getClassList()',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        position: fixed;
        bottom: var(--spacing-4);
        right: var(--spacing-4);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: var(--color-primary);
        color: var(--color-primary-fg);
        box-shadow: 0 2px 10px rgb(0 0 0 / 20%);
        transition:
          background-color 0.3s,
          box-shadow 0.3s;
        cursor: pointer;

        &:hover {
          background-color: hsl(from var(--color-primary) h s l / 90%);
          box-shadow: 0 4px 14px rgb(0 0 0 / 30%);
        }

        &:focus-visible {
          outline: none;
          box-shadow:
            0 0 0 2px var(--color-ring),
            0 0 0 4px var(--color-background);
        }

        &:disabled {
          pointer-events: none;
          opacity: 0.5;
        }
      }

      :host(.size--sm) {
        width: var(--spacing-9);
        height: var(--spacing-9);
      }

      :host(.size--md) {
        width: var(--spacing-10);
        height: var(--spacing-10);
      }

      :host(.size--lg) {
        width: var(--spacing-11);
        height: var(--spacing-11);
      }
    `,
  ],
})
export class FloatingActionButtonComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  getClassList() {
    return [`size--${this.size}`].join(' ');
  }
}
