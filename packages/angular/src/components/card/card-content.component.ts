import { Component } from '@angular/core';

@Component({
  selector: '[pui-card-content]',
  host: {
    'data-testid': 'pui-card-content',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        padding: var(--spacing-5);
        padding-top: 0;
      }
    `,
  ],
  standalone: true,
})
export class CardContentComponent {}
