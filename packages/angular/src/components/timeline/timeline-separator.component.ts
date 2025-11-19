import { Component } from '@angular/core';

@Component({
  selector: '[pui-timeline-separator]',
  standalone: true,
  host: {
    'data-testid': 'pui-timeline-separator',
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
