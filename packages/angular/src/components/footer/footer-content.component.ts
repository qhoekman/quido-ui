import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'div[pui-footer-content]',
  standalone: true,
  host: {
    'data-testid': 'pui-footer-content',
  },
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: var(--spacing-10);
      }

      @media (width >= 768px) {
        :host {
          gap: var(--spacing-14);
        }
      }

      @media (width >= 1280px) {
        :host {
          flex-direction: row;
        }
      }
    `,
  ],
})
export class FooterContentComponent {}
