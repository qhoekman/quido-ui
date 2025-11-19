import { Component } from '@angular/core';

@Component({
  selector: 'img[pui-spotlight-gallery-image]',
  standalone: true,
  host: {
    'data-testid': 'pui-spotlight-gallery-image',
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
