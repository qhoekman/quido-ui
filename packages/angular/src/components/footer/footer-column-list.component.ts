import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'ul[qui-footer-column-list]',
  standalone: true,
  host: {
    'data-testid': 'qui-footer-column-list',
  },
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-1);
        margin: var(--spacing-2) 0 0 0;
        padding: 0;
      }

      @media (width >= 1024px) {
        :host {
          margin-top: var(--spacing-2);
        }
      }
    `,
  ],
})
export class FooterColumnListComponent {}
