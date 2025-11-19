import { Component } from '@angular/core';

@Component({
  selector: '[qui-timeline]',
  standalone: true,
  host: {
    'data-testid': 'qui-timeline',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        display: block;
        margin: 0;
        padding: 0;
        list-style: none;
      }
    `,
  ],
})
export class TimelineComponent {}
