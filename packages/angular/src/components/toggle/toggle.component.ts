import { CommonModule } from '@angular/common';
import {
  Component,
  HostListener,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

export type ToggleVariants = {
  variant: 'default' | 'outline';
  size: 'sm' | 'md' | 'lg';
};

@Component({
  selector: 'button[qui-toggle]',
  standalone: true,
  imports: [CommonModule],
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'qui-toggle',
    '[attr.aria-pressed]': 'selected',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-2);
        border: 0;
        margin: 0;
        border-radius: var(--border-radius-md);
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
        transition: colors 0.3s;
        outline: none;

        &:focus-visible {
          box-shadow: 0 0 0 2px var(--color-ring),
            0 0 0 4px var(--color-background);
        }

        &:not(:disabled) {
          cursor: pointer;
        }

        &:disabled {
          pointer-events: none;
          opacity: 0.5;
        }
      }

      :host(.variant--default) {
        background-color: var(--color-card);
        color: var(--color-card-fg);
        box-shadow: var(--box-shadow-sm);
      }

      :host(.variant--outline) {
        border: 1px solid var(--color-border);
        background-color: transparent;

        &:hover {
          background-color: var(--color-primary);
          color: var(--color-primary-fg);
        }
      }

      :host(.size--sm) {
        height: var(--spacing-8);
        padding: var(--spacing-1-5);
      }

      :host(.size--md) {
        height: var(--spacing-9);
        padding: var(--spacing-2);
      }

      :host(.size--lg) {
        height: var(--spacing-10);
        padding: var(--spacing-2-5);
      }

      :host([aria-pressed='true']) {
        background-color: var(--color-primary);
        color: var(--color-primary-fg);
      }
    `,
  ],
})
export class ToggleComponent {
  @Input() variant: ToggleVariants['variant'] = 'default';
  @Input() size: ToggleVariants['size'] = 'md';
  @Input() selected = false;
  @Input() value = '';

  @Output() valueChange = new EventEmitter<boolean>();

  @HostListener('click')
  toggle() {
    this.selected = !this.selected;
    this.valueChange.emit(this.selected);
  }

  getClassList() {
    return [
      `variant--${this.variant}`,
      `size--${this.size}`,
      this.selected ? 'selected' : '',
    ].join(' ');
  }
}
