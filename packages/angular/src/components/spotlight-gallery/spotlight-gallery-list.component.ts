import { Component } from '@angular/core';

@Component({
  selector: 'div[qui-spotlight-gallery-list]',
  standalone: true,
  host: {
    'data-testid': 'qui-spotlight-gallery-list',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        gap: var(--spacing-4);
        margin-top: var(--spacing-2);
      }
    `,
  ],
})
export class SpotlightGalleryListComponent {}
