import { Component } from '@angular/core';

@Component({
  selector: 'div[pui-reel]',
  template: ` <ng-content></ng-content> `,
  standalone: true,
  host: {
    'data-testid': 'pui-reel',
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
