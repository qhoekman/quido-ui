import { Component } from '@angular/core';

@Component({
  selector: 'li[pui-sidebar-menu-item], div[pui-sidebar-menu-item]',
  standalone: true,
  host: {
    'data-sidebar': 'menu-item',
    'data-testid': 'pui-sidebar-menu-item',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        position: relative;
        display: block;
        transition: all 0.3s;
      }
    `,
  ],
})
export class SidebarMenuItemComponent {}
