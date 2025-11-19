import { Component } from '@angular/core';

@Component({
  selector: 'img[qui-header-backdrop-image]',
  standalone: true,
  host: {
    'data-testid': 'qui-header-backdrop-image',
  },
  template: '',
  styles: [
    `
      :host {
        position: absolute;
        z-index: -10;
        height: 100%;
        width: 100%;
        object-fit: cover;
        filter: brightness(0.25);
      }
    `,
  ],
})
export class HeaderBackdropImageComponent {}
