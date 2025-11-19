import { Component } from '@angular/core';

@Component({
  selector: 'img[qui-spotlight-gallery-image]',
  standalone: true,
  host: {
    'data-testid': 'qui-spotlight-gallery-image',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        width: 100%;
        aspect-ratio: 1;
      }
    `,
  ],
})
export class SpotlightGalleryImageComponent {}
