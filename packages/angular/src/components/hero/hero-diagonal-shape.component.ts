import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: '[qui-hero-diagonal-shape]',
  standalone: true,
  host: {
    'data-testid': 'hero__diagonal-shape',
  },
  template: ` <polygon points="0,0 90,0 50,100 0,100"></polygon> `,
  schemas: [NO_ERRORS_SCHEMA],
  styles: [
    `
      :host {
        position: absolute;
        top: 0;
        left: calc(-1 * var(--spacing-10));
        display: none;
        height: 100%;
        width: var(--spacing-44);
        transform: translateZ(0);
        fill: var(--color-white);
      }

      @media (width >= 1024px) {
        :host {
          display: block;
        }
      }
    `,
  ],
})
export class HeroDiagonalShapeComponent {}
