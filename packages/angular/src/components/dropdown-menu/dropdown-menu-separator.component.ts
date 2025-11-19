import { Component } from '@angular/core';

@Component({
  selector: '[pui-dropdown-menu-separator]',
  template: '',
  standalone: true,
  host: {
    role: 'separator',
    'aria-orientation': 'horizontal',
    'data-testid': 'pui-dropdown-menu-separator',
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
})
export class DropdownMenuSeparatorComponent {}
