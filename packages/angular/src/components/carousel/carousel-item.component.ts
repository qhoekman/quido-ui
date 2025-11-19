import { Component } from '@angular/core';

@Component({
  selector: 'div[qui-carousel-item]',
  standalone: true,
  host: {
    'data-testid': 'qui-carousel-item',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        flex: 0 0 100%;
      }
    `,
  ],
})
export class CarouselItemComponent {}
