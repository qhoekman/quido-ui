import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'p[pui-cta-subtitle]',
  standalone: true,
  imports: [CommonModule],
  host: {
    'data-testid': 'pui-cta-subtitle',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        max-width: var(--max-width-2xl);
        font-size: var(--font-size-base);
        color: hsl(from var(--color-background-fg) h s l / 66%);
        margin: 0;
      }

      @media (width >= 768px) {
        :host {
          font-size: var(--font-size-lg);
        }
      }
    `,
  ],
})
export class CTASubtitleComponent {}
