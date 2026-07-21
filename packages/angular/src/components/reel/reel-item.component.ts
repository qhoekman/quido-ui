import { Component } from '@angular/core';

@Component({
  selector: 'div[qui-reel-item]',
  template: `<ng-content></ng-content>`,
  standalone: true,
  host: {
    'data-testid': 'reel__item',
  },
  styles: [
    `
      :host {
        flex: 0 0 auto;
        scroll-snap-align: start;
      }
    `,
  ],
})
export class ReelItemComponent {}
