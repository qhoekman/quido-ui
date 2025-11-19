import { Component } from '@angular/core';

@Component({
  selector: 'ul[pui-sidebar-menu]',
  standalone: true,
  host: {
    'data-sidebar': 'menu',
    'data-testid': 'pui-sidebar-menu',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: flex;
        width: 100%;
        min-width: 0;
        flex-direction: column;
        gap: var(--spacing-1);
        list-style: none;
        padding: 0;
        margin: 0;
      }
    `,
  ],
})
export class SidebarMenuComponent {}
