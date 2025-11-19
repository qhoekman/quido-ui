import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'button[pui-sidebar-group-action], a[pui-sidebar-group-action]',
  standalone: true,
  host: {
    'data-testid': 'pui-sidebar-group-action',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        position: absolute;
        right: var(--spacing-3);
        top: var(--spacing-3-5);
        display: flex;
        aspect-ratio: 1;
        width: var(--spacing-5);
        align-items: center;
        justify-content: center;
        border-radius: var(--border-radius-md);
        padding: 0;
        color: var(--color-sidebar-fg);
        outline: none;
        transition: transform 0.3s;
        box-shadow: 0 0 0 0 var(--color-sidebar-ring);

        &:hover {
          background-color: var(--color-sidebar-accent);
          color: var(--color-sidebar-accent-fg);
        }

        &:focus-visible {
          box-shadow: 0 0 0 2px var(--color-sidebar-ring);
        }

        & > svg {
          width: var(--spacing-4);
          height: var(--spacing-4);
          flex-shrink: 0;
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

      :host-context(.collapsible--icon) {
        display: none;
      }
    `,
  ],
})
export class SidebarGroupActionComponent {
  @Input() asChild = false;

  @HostBinding('attr.data-sidebar') dataSidebar = 'group-action';
}
