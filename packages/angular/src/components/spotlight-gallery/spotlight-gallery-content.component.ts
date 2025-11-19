import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'div[pui-spotlight-gallery-content]',
  standalone: true,
  imports: [CommonModule],
  host: {
    'data-testid': 'pui-spotlight-gallery-content',
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
