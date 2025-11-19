import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { NumberInputFieldVariants } from './number-inputfield.component';

@Component({
  selector: 'input[pui-number-input]',
  standalone: true,
  host: {
    type: 'number',
    '[class]': 'getClassList()',
    'data-testid': 'pui-number-input',
  },
  template: ``,
  styles: [
    `
      :host {
        display: flex;
        text-align: center;
        background-color: var(--color-input);
        border: var(--border-width-default) solid var(--color-border);
        color: var(--color-input-fg);
        border-radius: 0;
        width: 100%;
        height: 100%;
        appearance: textfield;
        box-sizing: border-box;
      }

      :host::-webkit-inner-spin-button,
      :host::-webkit-outer-spin-button {
        margin: 0;
        appearance: none;
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
export class NumberInputComponent {
  @Input() size: NumberInputFieldVariants['size'] = 'md';

  constructor(public elementRef: ElementRef) {}

  getClassList() {
    return {
      [`size--${this.size}`]: true,
    };
  }

  @HostListener('keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'e' || event.key === 'E') {
      event.preventDefault();
    }
  }
}
