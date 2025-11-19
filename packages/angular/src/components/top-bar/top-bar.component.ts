import { Component } from '@angular/core';

@Component({
  selector: 'header[pui-top-bar], div[pui-top-bar]',
  standalone: true,
  host: {
    'data-testid': 'pui-top-bar',
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
