import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'div[qui-footer-columns]',
  standalone: true,
  host: {
    'data-testid': 'qui-footer-columns',
  },
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: block;
      }

      @media (width >= 640px) {
        :host {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--spacing-10);
        }
      }

      @media (width >= 1280px) {
        :host {
          gap: var(--spacing-20);
        }
      }
    `,
  ],
})
export class FooterColumnsComponent {}
