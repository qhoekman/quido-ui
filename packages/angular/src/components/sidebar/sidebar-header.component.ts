import { Component } from '@angular/core';

@Component({
  selector: 'div[pui-sidebar-header]',
  standalone: true,
  host: {
    'data-testid': 'pui-sidebar-header',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-2);
        padding: var(--spacing-2);
      }
    `,
  ],
})
export class SidebarHeaderComponent {}
