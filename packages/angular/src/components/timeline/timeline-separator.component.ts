import { Component } from '@angular/core';

@Component({
  selector: '[qui-timeline-separator]',
  standalone: true,
  host: {
    'data-testid': 'qui-timeline-separator',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        width: 1px;
        height: 100%;
        background-color: var(--color-border);
        margin: 0 auto;
      }
    `,
  ],
})
export class TimelineSeparatorComponent {}
