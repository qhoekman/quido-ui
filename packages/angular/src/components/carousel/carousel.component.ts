import { Component } from '@angular/core';

@Component({
  selector: 'div[qui-carousel]',
  standalone: true,
  host: {
    'data-testid': 'qui-carousel',
  },
  template: `
    <ng-content select="[qui-carousel-content]"></ng-content>
    <ng-content select="[qui-carousel-button]"></ng-content>
  `,
  styles: [
    `
      :host {
        display: flex;
        overflow: hidden;
        position: relative;
      }
    `,
  ],
})
export class CarouselComponent {}
