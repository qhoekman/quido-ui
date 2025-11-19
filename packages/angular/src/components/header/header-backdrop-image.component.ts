import { Component } from '@angular/core';

@Component({
  selector: 'img[pui-header-backdrop-image]',
  standalone: true,
  host: {
    'data-testid': 'pui-header-backdrop-image',
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
