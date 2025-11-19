import { Component, HostListener, Input } from '@angular/core';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'button[pui-sidebar-rail]',
  standalone: true,
  host: {
    'aria-label': 'Toggle Sidebar',
    'data-sidebar': 'rail',
    'data-testid': 'pui-sidebar-rail',
    tabindex: '-1',
    title: 'Toggle Sidebar',
    '[class]': 'getClassList()',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: var(--z-index-20);
        display: none;
        width: var(--spacing-4);
        transform: translateX(-50%);
        transition: all 0.3s ease-linear;
        background-color: transparent;
        border: none;
        cursor: pointer;
      }

      :host::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        width: 2px;
        background-color: var(--color-sidebar-border);
      }

      :host(:hover)::after {
        background-color: var(--color-sidebar-border);
      }

      :host-context(.side--left) {
        right: calc(var(--spacing-4) * -1);
      }

      :host-context(.side--right) {
        left: 0;
      }

      @media (width >= 640px) {
        :host {
          display: flex;
        }
      }

      :host-context(.side--left.state--collapsed) {
        cursor: e-resize;
      }

      :host-context(.side--right.state--collapsed) {
        cursor: w-resize;
      }

      :host-context(.collapsible--offcanvas) {
        transform: translateX(0);
      }

      :host-context(.collapsible--offcanvas)::after {
        left: 100%;
      }

      :host-context(.collapsible--offcanvas):hover {
        background-color: var(--sidebar);
      }

      :host-context(.side--left.collapsible--offcanvas) {
        right: calc(var(--spacing-2) * -1);
      }

      :host-context(.side--right.collapsible--offcanvas) {
        left: calc(var(--spacing-2) * -1);
      }
    `,
  ],
})
export class SidebarRailComponent {
  @Input() className = '';

  constructor(private sidebarService: SidebarService) {}

  getClassList() {
    return this.className;
  }

  @HostListener('click')
  handleClick() {
    this.sidebarService.toggleSidebar();
  }
}
