import { Component } from '@angular/core';

@Component({
  selector: 'p[qui-timeline-description], span[qui-timeline-description]',
  standalone: true,
  host: {
    'data-testid': 'qui-timeline-description',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        font-family: var(--font-family-sans);
        font-weight: var(--font-weight-normal);
        margin: 0;
        color: var(--color-text-muted);
      }
    `,
  ],
})
export class TimelineDescriptionComponent {}
