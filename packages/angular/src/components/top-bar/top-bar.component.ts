import { Component } from '@angular/core';

@Component({
  selector: 'header[qui-top-bar], div[qui-top-bar]',
  standalone: true,
  host: {
    'data-testid': 'qui-top-bar',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        display: flex;
        height: var(--spacing-10);
        align-items: center;
        border-bottom: 1px solid var(--color-border);
        background-color: var(--color-background);
        padding-left: var(--spacing-4);
        padding-right: var(--spacing-4);
      }
    `,
  ],
})
export class TopBarComponent {}
