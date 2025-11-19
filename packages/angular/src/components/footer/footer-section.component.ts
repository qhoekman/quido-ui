import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'div[pui-footer-section]',
  standalone: true,
  host: {
    'data-testid': 'pui-footer-section',
  },
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: flex;
        max-width: var(--breakpoint-xs);
        flex-direction: column;
        gap: var(--spacing-4);
      }

      @media (width >= 640px) {
        :host {
          max-width: var(--breakpoint-lg);
        }
      }
    `,
  ],
})
export class FooterSectionComponent {}
