import { Component, Input } from '@angular/core';

export type SidebarMenuSubButtonProps = {
  size?: 'sm' | 'md';
  isActive?: boolean;
  asChild?: boolean;
};

@Component({
  selector: 'button[pui-sidebar-menu-sub-button], a[pui-sidebar-menu-sub-button]',
  standalone: true,
  host: {
    'data-sidebar': 'menu-sub-button',
    'data-size': 'size',
    'data-active': 'isActive',
    'data-testid': 'pui-sidebar-menu-sub-button',
    '[class]': 'getClassList()',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: flex;
        height: var(--spacing-7);
        min-width: 0;
        transform: translateX(-1px);
        align-items: center;
        gap: var(--spacing-2);
        overflow: hidden;
        border-radius: var(--border-radius-md);
        padding: 0 var(--spacing-2);
        color: var(--color-sidebar-fg);
        outline: none;
        transition:
          background-color 0.3s,
          color 0.3s;
        text-decoration: none;
      }

      :host(:hover) {
        background-color: var(--color-sidebar-accent);
        color: var(--color-sidebar-accent-foreground);
      }

      :host(:focus-visible) {
        box-shadow: 0 0 0 2px var(--color-ring);
      }

      :host(:active) {
        background-color: var(--color-sidebar-accent);
        color: var(--color-sidebar-accent-foreground);
      }

      :host(:disabled) {
        pointer-events: none;
        opacity: 0.5;
      }

      :host([data-active='true']) {
        background-color: var(--color-sidebar-accent);
        color: var(--color-sidebar-accent-foreground);
      }

      :host([data-size='sm']) {
        font-size: var(--font-size-xs);
      }

      :host([data-size='md']) {
        font-size: var(--font-size-sm);
      }

      :host-context(.collapsible--icon) {
        display: none;
      }
    `,
  ],
})
export class SidebarMenuSubButtonComponent {
  @Input() size: SidebarMenuSubButtonProps['size'] = 'md';
  @Input() isActive?: boolean;
  @Input() asChild?: boolean;

  getClassList() {
    return {
      'group-data-[collapsible=icon]:hidden': true,
    };
  }
}
