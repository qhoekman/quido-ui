import { Component, Input } from '@angular/core';

@Component({
  selector: 'div[pui-sidebar-menu-badge]',
  standalone: true,
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'pui-sidebar-menu-badge',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        position: absolute;
        right: var(--spacing-1);
        display: flex;
        height: var(--spacing-5);
        min-width: var(--spacing-5);
        align-items: center;
        justify-content: center;
        border-radius: var(--border-radius-md);
        padding: 0 var(--spacing-1);
        font-size: var(--font-size-xs);
        font-weight: var(--font-weight-medium);
        color: var(--color-sidebar-fg);
        pointer-events: none;
        user-select: none;
      }

      :host(.hover-menu-button) {
        color: var(--color-sidebar-accent-fg);
      }

      :host(.active-menu-button) {
        color: var(--color-sidebar-accent-fg);
      }

      :host(.size-sm) {
        top: var(--spacing-1);
      }

      :host(.size-default) {
        top: var(--spacing-1-5);
      }

      :host(.size-lg) {
        top: var(--spacing-2-5);
      }

      :host-context(.collapsible--icon) {
        display: none;
      }
    `,
  ],
})
export class SidebarMenuBadgeComponent {
  @Input() hoverMenuButton = false;
  @Input() activeMenuButton = false;
  @Input() size: 'sm' | 'default' | 'lg' = 'default';
  @Input() collapsibleIcon = false;

  getClassList() {
    return {
      'hover-menu-button': this.hoverMenuButton,
      'active-menu-button': this.activeMenuButton,
      [`size-${this.size}`]: true,
      'collapsible-icon': this.collapsibleIcon,
    };
  }
}
