import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'div[qui-cta-section]',
  standalone: true,
  imports: [CommonModule],
  host: {
    'data-testid': 'qui-cta-section',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-4);
        margin: 0 auto;
        max-width: var(--max-width-2xl);
        text-align: center;
      }

      @media (width >= 1280px) {
        :host {
          text-align: left;
          margin-left: 0;
        }
      }
    `,
  ],
})
export class CTASectionComponent {}
