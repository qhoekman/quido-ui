import { Component } from '@angular/core';

@Component({
  selector: '[pui-tab-navigation-separator]',
  template: '',
  host: {
    role: 'separator',
    'data-testid': 'pui-tab-navigation-separator',
    'aria-orientation': 'horizontal',
  },
  styles: [
    `
      :host {
        background-color: var(--color-border);
        height: var(--spacing-px);
        margin: var(--spacing-1) calc(-1 * var(--spacing-1));
      }
    `,
  ],
  standalone: true,
})
export class TabNavigationSeparatorComponent {}
