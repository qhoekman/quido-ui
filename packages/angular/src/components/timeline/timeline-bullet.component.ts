import { Component } from '@angular/core';

@Component({
  selector: '[qui-timeline-bullet]',
  standalone: true,
  host: {
    'data-testid': 'qui-timeline-bullet',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--spacing-6);
        height: var(--spacing-6);
        background-color: var(--color-muted);
        border-radius: 50%;
        border: 1px solid var(--color-border);
        box-shadow: var(--box-shadow-sm);
      }
    `,
  ],
})
export class TimelineBulletComponent {}
