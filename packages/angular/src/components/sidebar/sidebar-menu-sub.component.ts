import { Component, Input } from '@angular/core';

@Component({
  selector: 'ul[pui-sidebar-menu-sub]',
  standalone: true,
  host: {
    'data-sidebar': 'menu-sub',
    'data-testid': 'pui-sidebar-menu-sub',
    '[class]': 'getClassList()',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-1);
        border-left: var(--border-width-default) solid var(--color-sidebar-border);
        margin: 0;
        padding: 0;
        padding: var(--spacing-2-5) var(--spacing-0-5);
        margin-left: var(--spacing-3-5);
        min-width: 0;
        list-style: none;
        transform: translateX(1px);
      }

      :host-context(.collapsible--icon) {
        display: none;
      }
    `,
  ],
})
export class SidebarMenuSubComponent {
  @Input() collapsibleIcon = false;

  getClassList() {
    return {
      'collapsible-icon': this.collapsibleIcon,
    };
  }
}
