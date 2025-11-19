import { Component } from '@angular/core';

@Component({
  selector: 'div[qui-sidebar-footer]',
  standalone: true,
  host: {
    'data-testid': 'qui-sidebar-footer',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-2);
        padding: var(--spacing-2);
        background-color: var(--color-sidebar);
        color: var(--color-sidebar-fg);
      }
    `,
  ],
})
export class SidebarFooterComponent {}
