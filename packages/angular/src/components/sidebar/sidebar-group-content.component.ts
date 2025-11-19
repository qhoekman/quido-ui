import { Component } from '@angular/core';

@Component({
  selector: 'div[qui-sidebar-group-content]',
  standalone: true,
  host: {
    'data-testid': 'qui-sidebar-group-content',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        width: 100%;
        font-size: var(--font-size-sm);
        display: block;
      }
    `,
  ],
})
export class SidebarGroupContentComponent {}
