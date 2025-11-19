import { Component, HostListener } from '@angular/core';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'button[qui-sidebar-trigger]',
  standalone: true,
  host: {
    'data-sidebar': 'trigger',
    'data-testid': 'qui-sidebar-trigger',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: var(--spacing-7);
        width: var(--spacing-7);
        background-color: transparent;
        color: var(--color-background-fg);
        border: none;
        cursor: pointer;
        transition: background-color 0.3s;
      }

      :host(:hover) {
        background-color: hsl(var(--color-background-fg) h s l / 5%);
      }
    `,
  ],
})
export class SidebarTriggerComponent {
  constructor(private sidebarService: SidebarService) {}

  @HostListener('click', ['$event'])
  handleClick(_event: MouseEvent) {
    this.sidebarService.toggleSidebar();
  }
}
