import { Component } from '@angular/core';

@Component({
  selector: 'li[pui-sidebar-menu-sub-item]',
  standalone: true,
  host: {
    'data-sidebar': 'menu-sub-item',
    'data-testid': 'pui-sidebar-menu-sub-item',
  },
  template: `<ng-content></ng-content>`,
})
export class SidebarMenuSubItemComponent {}
