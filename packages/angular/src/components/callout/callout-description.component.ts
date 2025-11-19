import { Component } from '@angular/core';

@Component({
  selector: '[qui-callout-description]',
  standalone: true,
  host: {
    'data-testid': 'qui-callout-description',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        margin: 0;
        font-size: var(--font-size-sm);
      }
    `,
  ],
})
export class CalloutDescriptionComponent {}
