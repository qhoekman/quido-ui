import { Component, Input } from '@angular/core';

@Component({
  selector: 'button[qui-sidebar-menu-action], a[qui-sidebar-menu-action]',
  standalone: true,
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'qui-sidebar-menu-action',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        position: absolute;
        right: var(--spacing-1);
        top: var(--spacing-1-5);
        display: flex;
        aspect-ratio: 1;
        width: var(--spacing-5);
        align-items: center;
        justify-content: center;
        border: none;
        background: transparent;
        border-radius: var(--border-radius-md);
        padding: 0;
        color: var(--color-sidebar-fg);
        outline: none;
        transition: transform 0.3s;

        &:hover {
          background-color: var(--color-sidebar-accent);
          color: var(--color-sidebar-accent-fg);
        }

        &:focus-visible {
          box-shadow: 0 0 0 2px var(--color-sidebar-ring);
        }

        &::after {
          content: '';
          position: absolute;
          inset: -var(--spacing-2);
          display: none;
        }

        @media (width <= 768px) {
          &::after {
            display: block;
          }
        }
      }

      :host(.show-on-hover) {
        opacity: 0;

        &:focus-within,
        &:hover {
          opacity: 1;
        }
      }

      :host-context(.collapsible--icon) {
        display: none;
      }
    `,
  ],
})
export class SidebarMenuActionComponent {
  @Input() showOnHover = false;

  getClassList() {
    return {
      'show-on-hover': this.showOnHover,
    };
  }
}
