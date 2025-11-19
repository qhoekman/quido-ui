import { Component } from '@angular/core';

@Component({
  selector: '[qui-callout-indicator]',
  standalone: true,
  host: {
    'data-testid': 'qui-callout-indicator',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        position: absolute;
        top: var(--spacing-4);
        left: var(--spacing-4);
        transform: translateY(-3px);
        color: inherit;
        width: var(--spacing-8);
        height: var(--spacing-8);
      }
    `,
  ],
})
export class CalloutIndicatorComponent {}
