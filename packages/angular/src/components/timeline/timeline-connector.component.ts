import { Component } from '@angular/core';

@Component({
  selector: '[pui-timeline-connector]',
  standalone: true,
  host: {
    'data-testid': 'pui-timeline-connector',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin-right: var(--spacing-2);
      }
    `,
  ],
})
export class TimelineConnectorComponent {}
