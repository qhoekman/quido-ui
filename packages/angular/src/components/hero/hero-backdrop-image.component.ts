import { Component } from '@angular/core';

@Component({
  selector: '[qui-hero-backdrop-image]',
  standalone: true,
  host: {
    'data-testid': 'qui-hero-backdrop-image',
  },
  template: '',
  styles: [
    `
      :host {
        position: absolute;
        z-index: -10;
        height: 100%;
        max-height: 90vh;
        width: 100%;
        object-fit: cover;
        filter: brightness(0.25);
      }
    `,
  ],
})
export class HeroBackdropImageComponent {}
