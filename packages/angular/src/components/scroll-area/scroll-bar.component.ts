import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'qui-scroll-bar',
  standalone: true,
  imports: [CommonModule],
  host: {
    'data-testid': 'scroll-area__bar',
    '[style]': 'getBarStyles()',
  },
  template: `
    <div
      class="scroll-thumb"
      [ngStyle]="getThumbStyles()"
      data-testid="scroll-area__bar-thumb"
    ></div>
  `,
  styles: [
    `
      :host {
        position: absolute;
        display: flex;
        touch-action: none;
        user-select: none;
        transition: colors 0.3s;
      }

      .scroll-thumb {
        position: relative;
        flex: 1;
        border-radius: var(--border-radius-full);
        background-color: var(--color-border);
      }
    `,
  ],
})
export class ScrollBarComponent {
  @Input() orientation: 'vertical' | 'horizontal' = 'vertical';
  @Input() thumbPosition = 0;
  @Input() thumbSize = 0;

  getBarStyles() {
    return {
      right: this.orientation === 'vertical' ? '0' : null,
      top: this.orientation === 'vertical' ? '0' : null,
      bottom: this.orientation === 'horizontal' ? '0' : null,
      left: this.orientation === 'horizontal' ? '0' : null,
      height: this.orientation === 'vertical' ? '100%' : 'var(--spacing-2-5)',
      width: this.orientation === 'horizontal' ? '100%' : 'var(--spacing-2-5)',
      padding: '1px',
    };
  }

  getThumbStyles() {
    return {
      [this.orientation === 'vertical'
        ? 'height'
        : 'width']: `${this.thumbSize}px`,
      transform: `translate${this.orientation === 'vertical' ? 'Y' : 'X'}(${
        this.thumbPosition
      }px)`,
    };
  }
}
