import { Component } from '@angular/core';

@Component({
  selector: 'div[pui-carousel]',
  standalone: true,
  host: {
    'data-testid': 'pui-carousel',
  },
  template: `
    <ng-content select="[pui-carousel-content]"></ng-content>
    <ng-content select="[pui-carousel-button]"></ng-content>
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
