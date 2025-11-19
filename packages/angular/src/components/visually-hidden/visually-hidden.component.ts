import { Component } from '@angular/core';

@Component({
  selector: '[qui-visually-hidden], [qui-sr-only]',
  standalone: true,
  host: {
    'data-testid': 'qui-visually-hidden',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
      }
    `,
  ],
})
export class VisuallyHiddenComponent {}
