import { Component } from '@angular/core';

@Component({
  selector: '[pui-timeline-item]',
  standalone: true,
  host: {
    'data-testid': 'pui-timeline-item',
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
