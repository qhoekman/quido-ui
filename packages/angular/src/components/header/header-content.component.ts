import { Component } from '@angular/core';

@Component({
  selector: 'div[qui-header-content]',
  standalone: true,
  host: {
    'data-testid': 'qui-header-content',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        max-width: var(--breakpoint-4xl);
        gap: var(--spacing-7);
      }
    `,
  ],
})
export class HeaderContentComponent {}
