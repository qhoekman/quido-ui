import { Component } from '@angular/core';

@Component({
  selector: 'div[pui-hero]',
  standalone: true,
  host: {
    'data-testid': 'pui-hero',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        gap: var(--spacing-14);
      }

      @media (width >= 1024px) {
        :host {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    `,
  ],
})
export class HeroComponent {}
