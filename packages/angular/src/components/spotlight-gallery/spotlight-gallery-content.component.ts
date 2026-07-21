import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'div[qui-spotlight-gallery-content]',
  standalone: true,
  imports: [CommonModule],
  host: {
    'data-testid': 'spotlight-gallery__content',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        width: 100%;
        aspect-ratio: 1;
      }
    `,
  ],
})
export class SpotlightGalleryContentComponent {}
