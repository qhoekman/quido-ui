import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: '[pui-footer-banner-list]',
  standalone: true,
  host: {
    'data-testid': 'pui-footer-banner-list',
  },
  imports: [CommonModule],
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-4);
        margin: 0;
        padding: 0;
      }

      @media (width >= 768px) {
        :host {
          flex-direction: row;
        }
      }
    `,
  ],
  template: `<ng-content></ng-content>`,
})
export class FooterBannerListComponent {}
