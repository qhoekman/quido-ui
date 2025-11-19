import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'div[qui-cta-content]',
  standalone: true,
  imports: [CommonModule],
  host: {
    'data-testid': 'qui-cta-content',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        margin: 0 auto;
        max-width: var(--max-width-7xl);
        padding-left: var(--spacing-4);
        padding-right: var(--spacing-4);
      }

      @media (width >= 640px) {
        :host {
          padding-left: var(--spacing-6);
          padding-right: var(--spacing-6);
        }
      }

      @media (width >= 1024px) {
        :host {
          padding-left: var(--spacing-8);
          padding-right: var(--spacing-8);
        }
      }
    `,
  ],
})
export class CTAContentComponent {}
