import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'div[pui-cta-actions]',
  standalone: true,
  imports: [CommonModule],
  host: {
    'data-testid': 'pui-cta-actions',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-4);
        max-width: var(--max-width-md);
        width: 100%;
      }

      @media (width >= 1024px) {
        :host {
          flex-direction: row;
          justify-content: center;
          gap: var(--spacing-4);
        }
      }
    `,
  ],
})
export class CTAActionsComponent {}
