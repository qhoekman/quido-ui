import { Component } from '@angular/core';

@Component({
  selector: 'div[pui-header-actions]',
  standalone: true,
  host: {
    'data-testid': 'pui-header-actions',
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
