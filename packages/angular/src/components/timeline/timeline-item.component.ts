import { Component } from '@angular/core';

@Component({
  selector: '[qui-timeline-item]',
  standalone: true,
  host: {
    'data-testid': 'timeline__item',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        display: grid;
        grid-template-columns: var(--spacing-8) auto;
      }
    `,
  ],
})
export class TimelineItemComponent {}
