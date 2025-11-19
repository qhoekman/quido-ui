import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'h2[pui-cta-title]',
  standalone: true,
  imports: [CommonModule],
  host: {
    'data-testid': 'pui-cta-title',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        font-size: var(--font-size-3xl);
        font-weight: var(--font-weight-bold);
        line-height: var(--line-height-tight);
        color: var(--color-background-fg);
        margin: 0;
      }

      @media (width >= 768px) {
        :host {
          font-size: var(--font-size-4xl);
        }
      }

      @media (width >= 1280px) {
        :host {
          font-size: var(--font-size-5xl);
        }
      }
    `,
  ],
})
export class CTATitleComponent {}
