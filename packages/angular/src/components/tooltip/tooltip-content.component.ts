import { Component, ElementRef, Input } from '@angular/core';

export type TooltipContentVariants = {
  position: 'top' | 'right' | 'bottom' | 'left' | 'none';
};

@Component({
  selector: '[pui-tooltip-content]',
  standalone: true,
  host: {
    'data-testid': 'pui-tooltip-content',
  },
  styles: [
    `
      :host {
        position: relative;
        z-index: var(--z-index-50);
        margin: var(--spacing-auto);
        max-width: var(--size-fit);
        padding: var(--spacing-1-5) var(--spacing-3);
        border-radius: var(--border-radius-md);
        background-color: var(--color-card);
        color: var(--color-card-fg);
        font-size: var(--font-size-xs);
        box-shadow: var(--box-shadow-default);
        animation:
          fadeIn 0.2s ease-out,
          zoomIn 0.2s ease-out;
      }

      :host svg {
        position: absolute;
        top: -5px;
        left: 50%;
        transform: translateX(-50%);
        color: var(--color-card);
      }
    `,
  ],
  template: `
    <svg width="20" height="10" viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,10 10,0 20,10" fill="currentColor" />
    </svg>
    <ng-content></ng-content>
  `,
})
export class TooltipContentComponent {
  @Input() position: TooltipContentVariants['position'] = 'none';
  constructor(public elementRef: ElementRef) {}

  getClassList() {
    return [`position--${this.position}`].join(' ');
  }
}
