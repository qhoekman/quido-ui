import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'div[qui-footer-banner]',
  standalone: true,
  host: {
    'data-testid': 'qui-footer-banner',
  },
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: var(--color-background-fg);
        fill: currentColor;
        gap: var(--spacing-1);
        border-top: 1px solid var(--color-neutral-900-10);
        padding-top: var(--spacing-4);
      }

      @media (width >= 768px) {
        flex-direction: row;
        align-items: flex-end;
      }
    `,
  ],
})
export class FooterBannerComponent {}
