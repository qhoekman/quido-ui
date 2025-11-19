import { Component } from '@angular/core';

@Component({
  selector: '[pui-menubar-separator]',
  template: '',
  standalone: true,
  host: {
    role: 'separator',
    'data-testid': 'pui-menubar-separator',
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
})
export class MenubarSeparatorComponent {}
