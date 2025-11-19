import { Component } from '@angular/core';

@Component({
  selector: '[pui-callout-title]',
  standalone: true,
  host: {
    'data-testid': 'pui-callout-title',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        margin: 0;
        margin-bottom: var(--spacing-1);
        font-size: var(--font-size-lg);
        font-weight: var(--font-weight-medium);
        line-height: var(--line-height-none);
        letter-spacing: var(--letter-spacing-tight);
      }
    `,
  ],
})
export class CalloutTitleComponent {}
