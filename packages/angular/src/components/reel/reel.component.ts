import { Component } from '@angular/core';

@Component({
  selector: 'div[qui-reel]',
  template: ` <ng-content></ng-content> `,
  standalone: true,
  host: {
    'data-testid': 'qui-reel',
  },
  styles: [
    `
      :host {
        position: relative;
        display: flex;
        overflow: hidden;
      }
    `,
  ],
})
export class ReelComponent {}
