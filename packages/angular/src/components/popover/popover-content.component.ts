import { Component } from '@angular/core';

@Component({
  selector: '*[pui-popover-content]',
  standalone: true,
  host: {
    'data-testid': 'pui-popover-content',
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
    `,
  ],
  template: ` <ng-content></ng-content> `,
})
export class PopoverContentComponent {}
