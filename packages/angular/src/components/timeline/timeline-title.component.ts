import { Component } from '@angular/core';

@Component({
  selector:
    'h1[pui-timeline-title], h2[pui-timeline-title], h3[pui-timeline-title], h4[pui-timeline-title], h5[pui-timeline-title], h6[pui-timeline-title]',
  standalone: true,
  host: {
    'data-testid': 'pui-timeline-title',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        font-family: var(--font-family-sans);
        font-weight: var(--font-weight-semibold);
        margin: 0;
      }
    `,
  ],
})
export class TimelineTitleComponent {}
