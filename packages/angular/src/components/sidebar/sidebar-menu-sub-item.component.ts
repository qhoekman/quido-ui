import { Component } from '@angular/core';

@Component({
  selector: 'li[qui-sidebar-menu-sub-item]',
  standalone: true,
  host: {
    'data-sidebar': 'menu-sub-item',
    'data-testid': 'sidebar__menu-sub-item',
  },
  template: `<ng-content></ng-content>`,
})
export class SidebarMenuSubItemComponent {}
