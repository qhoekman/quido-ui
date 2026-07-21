import { Component } from '@angular/core';

@Component({
  selector: 'div[qui-header-content]',
  standalone: true,
  host: {
    'data-testid': 'header__content',
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
