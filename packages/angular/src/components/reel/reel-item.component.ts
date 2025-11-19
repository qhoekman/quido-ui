import { Component } from '@angular/core';

@Component({
  selector: 'div[pui-reel-item]',
  template: `<ng-content></ng-content>`,
  standalone: true,
  host: {
    'data-testid': 'pui-reel-item',
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
