import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: '[qui-hero-diagonal-shape]',
  standalone: true,
  host: {
    'data-testid': 'qui-hero-diagonal-shape',
  },
  template: ` <polygon points="0,0 90,0 50,100 0,100"></polygon> `,
  schemas: [NO_ERRORS_SCHEMA],
  styles: [
    `
      :host {
        position: absolute;
        top: 0;
        left: -10;
        display: none;
        height: 100%;
        width: 44;
        transform: fill-white;
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
