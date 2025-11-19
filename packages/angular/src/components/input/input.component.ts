import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input } from '@angular/core';

export type InputVariants = {
  size: 'sm' | 'md' | 'lg';
};

@Component({
  selector: 'input[pui-input]',
  standalone: true,
  imports: [CommonModule],
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'pui-input',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: inline-flex;
        flex: 1 1 auto;
        border-radius: var(--border-radius-md);
        border: 1px solid var(--color-border);
        background-color: var(--color-input);
        color: var(--color-input-fg);
        font-size: var(--font-size-sm);
        line-height: var(--line-height-sm);

        &[type='file'] {
          border: 0;
          background-color: transparent;
          font-size: var(--font-size-sm);
          font-weight: var(--font-weight-medium);

          &::file-selector-button {
            background-color: hsl(from var(--color-background-fg) h s l / 5%);
            color: var(--color-background-fg);
            border: 0;
            border-radius: var(--border-radius-md);
            padding: var(--spacing-2) var(--spacing-3);
            margin-right: var(--spacing-2);
            font-size: var(--font-size-sm);
            line-height: var(--line-height-sm);

            &:hover {
              background-color: var(--color-muted-hover);
            }
          }
        }

        &[type='number'] {
          appearance: textfield;

          &::-webkit-inner-spin-button,
          &::-webkit-outer-spin-button {
            appearance: none;
            margin: 0;
          }
        }

        &[type='date'],
        &[type='datetime-local'],
        &[type='month'],
        &[type='time'] {
          appearance: textfield;

          &::-webkit-calendar-picker-indicator {
            display: none;
          }
        }

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
        height: var(--spacing-6);
        padding: var(--spacing-2) var(--spacing-2);
      }

      :host-context(.size--md) {
        height: var(--spacing-8);
        padding: var(--spacing-3) var(--spacing-2);
      }

      :host-context(.size--lg) {
        height: var(--spacing-10);
        padding: var(--spacing-3) var(--spacing-3);
      }
    `,
  ],
})
export class InputComponent {
  @Input() size: InputVariants['size'] = 'md';
  nativeElement!: HTMLInputElement;
  constructor(private elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement;
  }

  getClassList(): string {
    return `size--${this.size}`;
  }
}
