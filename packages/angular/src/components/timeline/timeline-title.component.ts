import { Component } from '@angular/core';

@Component({
  selector:
    'h1[qui-timeline-title], h2[qui-timeline-title], h3[qui-timeline-title], h4[qui-timeline-title], h5[qui-timeline-title], h6[qui-timeline-title]',
  standalone: true,
  host: {
    'data-testid': 'qui-timeline-title',
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
