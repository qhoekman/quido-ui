import { Component } from '@angular/core';

@Component({
  selector: '[qui-hero-cover-image]',
  standalone: true,
  host: {
    'data-testid': 'qui-hero-cover-image',
  },
  template: '',
  styles: [
    `
      :host {
        height: 100%;
        max-height: 30vh;
        width: 100%;
        object-fit: cover;
      }
    `,
  ],
})
export class HeroCoverImageComponent {}
