import { Component } from '@angular/core';

@Component({
  selector: '[pui-timeline-content]',
  standalone: true,
  host: {
    'data-testid': 'pui-timeline-content',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        flex: 1;
        margin-bottom: var(--spacing-4);
      }
    `,
  ],
})
export class TimelineContentComponent {}
