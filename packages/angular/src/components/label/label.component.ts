import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
} from '@angular/core';

export type LabelVariants = {
  disabled: boolean;
  size: 'sm' | 'md';
};

@Component({
  selector: 'label[qui-label]',
  standalone: true,
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'qui-label',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: inline-block;
        color: var(--color-background-fg);
        font-weight: var(--font-weight-medium);
        line-height: var(--line-height-none);
      }

      :host-context(.size--sm) {
        font-size: var(--font-size-sm);
      }

      :host-context(.size--md) {
        font-size: var(--font-size-md);
      }

      :host-context(.disabled) {
        cursor: not-allowed;
        opacity: 0.7;
      }
    `,
  ],
})
export class LabelComponent implements AfterViewInit, OnDestroy {
  private disabled = false;
  private disabledObserver: MutationObserver | null = null;
  @Input() size: LabelVariants['size'] = 'md';

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    const adjacentInput = this.getAdjacentInput();

    if (adjacentInput !== null) {
      this.observeDisabledState(adjacentInput);
    }
  }

  ngOnDestroy() {
    if (this.disabledObserver) {
      this.disabledObserver.disconnect();
    }
  }

  getClassList(): string {
    return `size--${this.size} ${this.disabled ? 'disabled' : ''}`;
  }

  private getAdjacentInput(): HTMLInputElement | null {
    const adjacentInput = this.elementRef.nativeElement.nextElementSibling;

    if (!adjacentInput) {
      return null;
    }

    return adjacentInput instanceof HTMLInputElement ||
      adjacentInput instanceof HTMLTextAreaElement
      ? (adjacentInput as HTMLInputElement)
      : adjacentInput.querySelector('input, textarea');
  }

  private observeDisabledState(adjacentInput: HTMLInputElement): void {
    this.disabled = adjacentInput.disabled;
    this.disabledObserver = new MutationObserver(() => {
      this.disabled = adjacentInput.disabled;

      if (adjacentInput.hasAttribute('disabled')) {
        this.elementRef.nativeElement.classList.add(
          this.disabled ? 'disabled' : ''
        );
      } else {
        this.elementRef.nativeElement.classList.remove('disabled');
      }
    });
    this.disabledObserver.observe(adjacentInput, {
      attributes: true,
    });
  }
}
