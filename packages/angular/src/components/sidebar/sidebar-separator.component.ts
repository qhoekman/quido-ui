import { Component } from '@angular/core';

@Component({
  selector: 'div[pui-sidebar-separator]',
  standalone: true,
  host: {
    'data-sidebar': 'separator',
    'data-testid': 'pui-sidebar-separator',
    '[class]': 'getClassList()',
  },
  template: '',
  styles: [
    `
      :host {
        display: block;
        margin-left: var(--spacing-2);
        margin-right: var(--spacing-2);
        width: auto;
        background-color: var(--color-sidebar-border);
        height: 1px; /* Assuming a separator line */
      }
    `,
  ],
})
export class SidebarSeparatorComponent {
  getClassList() {
    return {
      'sidebar-separator': true,
    };
  }
}
