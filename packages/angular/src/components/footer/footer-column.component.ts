import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'div[qui-footer-column]',
  standalone: true,
  host: {
    'data-testid': 'qui-footer-column',
  },
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        margin-top: var(--spacing-10);
      }

      @media (width >= 640px) {
        :host {
          margin-top: 0;
        }
      }
    `,
  ],
})
export class FooterColumnComponent {}
