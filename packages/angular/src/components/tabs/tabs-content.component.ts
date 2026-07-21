import { Component } from '@angular/core';

@Component({
  selector: '[qui-tabs-content]',
  template: `<ng-content></ng-content>`,
  host: {
    'data-testid': 'tabs__content',
  },
  styles: [
    `
      :host {
        margin-top: var(--spacing-2);
        outline: none;
      }
    `,
  ],
  standalone: true,
})
export class TabsContentComponent {}
