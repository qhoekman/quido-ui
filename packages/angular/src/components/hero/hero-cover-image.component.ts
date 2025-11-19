import { Component } from '@angular/core';

@Component({
  selector: '[pui-hero-cover-image]',
  standalone: true,
  host: {
    'data-testid': 'pui-hero-cover-image',
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
