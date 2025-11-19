import { Component } from '@angular/core';

@Component({
  selector: 'input[qui-sidebar-input]',
  standalone: true,
  host: {
    'data-testid': 'qui-sidebar-input',
    '[attr.data-sidebar]': '"input"',
  },
  template: '',
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        height: 2rem;
        background-color: var(--color-background);
        box-shadow: var(--box-shadow-none);
        outline: none;
        transition: box-shadow 0.3s;
      }

      :host(:focus-visible) {
        box-shadow: 0 0 0 2px var(--color-ring),
          0 0 0 4px var(--color-background);
      }
    `,
  ],
})
export class SidebarInputComponent {}
