import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: '[pui-skip-to-content]',
  host: {
    'data-testid': 'pui-skip-to-content',
    '[class]': 'getClassList()',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        position: absolute;
        top: -1px;
        left: -1px;
        z-index: 1000;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        border: 0 none;
        gap: var(--spacing-2);
        border-radius: var(--border-radius-md);
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
        outline: var(--color-ring) 1px solid;
        box-shadow: 0 0 0 0 var(--background);
        text-decoration: none;
        transform: translateY(-100%);
        transition: transform 0.3s;

        &:focus-visible {
          box-shadow:
            0 0 0 2px var(--color-ring),
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

      :host(.size--sm) {
        height: var(--spacing-9);
        border-radius: var(--border-radius-md);
        padding: var(--spacing-3);
      }

      :host(.size--md) {
        height: var(--spacing-10);
        padding: var(--spacing-2) var(--spacing-4);
      }

      :host(.size--lg) {
        height: var(--spacing-11);
        border-radius: var(--border-radius-md);
        padding: var(--spacing-8);
      }

      :host(.size--icon) {
        height: var(--spacing-10);
        width: var(--spacing-10);
      }

      :host(.variant--visible) {
        transform: translateY(0);
      }
    `,
  ],
  standalone: true,
})
export class SkipToContentComponent {
  @Input() targetId: string | null = null;
  @Input() size: 'sm' | 'md' | 'lg' | 'icon' = 'md';
  private isVisible = false;

  getClassList() {
    return {
      'variant--visible': this.isVisible,
      [`size--${this.size}`]: true,
    };
  }

  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      this.isVisible = true;
      return;
    }

    if (event.key === 'Escape') {
      this.isVisible = false;
      return;
    }

    if ((event.key === ' ' || event.key === 'Enter') && this.isVisible && this.targetId) {
      const targetElement = document.getElementById(this.targetId);
      targetElement?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  @HostListener('window:click', ['$event'])
  handleClick(_event: MouseEvent) {
    if (this.isVisible && this.targetId) {
      const targetElement = document.getElementById(this.targetId);
      targetElement?.focus();
      this.isVisible = false;
    }
  }
}
