import { Component } from '@angular/core';

@Component({
  selector: 'div[qui-header-actions]',
  standalone: true,
  host: {
    'data-testid': 'qui-header-actions',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        margin-right: auto;
        display: flex;
        gap: var(--spacing-8);
      }
    `,
  ],
})
export class HeaderActionsComponent {}
