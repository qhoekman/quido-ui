import { Component } from '@angular/core';

@Component({
  selector: '[qui-dropdown-menu-content]',
  template: `<ng-content></ng-content>`,
  standalone: true,
  host: {
    role: 'menu',
    'aria-orientation': 'vertical',
    'data-testid': 'qui-dropdown-menu-content',
    tabindex: '-1',
  },
  styles: [
    `
      :host {
        z-index: var(--z-index-50);
        min-width: var(--spacing-32);
        width: var(--spacing-48);
        overflow: hidden;
        border-radius: var(--border-radius-default);
        border: var(--border-width-default) solid var(--color-border);
        background: var(--color-popover);
        padding: var(--spacing-1);
        color: var(--color-popover-fg);
        box-shadow: var(--box-shadow-lg);
      }
    `,
  ],
})
export class DropdownMenuContentComponent {}
