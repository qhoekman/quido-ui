import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'footer[pui-footer]',
  standalone: true,
  host: {
    'data-testid': 'pui-footer',
  },
  imports: [CommonModule],
  styles: [
    `
      :host {
        display: block;
        margin: 0 auto;
        padding: var(--spacing-16) var(--spacing-6) var(--spacing-8) var(--spacing-6);
      }

      @media (width >= 768px) {
        :host {
          padding-bottom: var(--spacing-10);
          padding-top: var(--spacing-18);
        }
      }
    `,
  ],
  template: ` <ng-content></ng-content> `,
})
export class FooterComponent {}
