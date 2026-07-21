import { Component } from '@angular/core';

@Component({
  selector: 'li[qui-sidebar-menu-item], div[qui-sidebar-menu-item]',
  standalone: true,
  host: {
    'data-sidebar': 'menu-item',
    'data-testid': 'sidebar__menu-item',
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
