import { CdkMenu } from '@angular/cdk/menu';
import { Component } from '@angular/core';

@Component({
  selector: '[qui-menubar-menu]',
  template: `<ng-content></ng-content>`,
  host: {
    role: 'menu',
    'data-testid': 'qui-menubar-menu',
    'aria-orientation': 'vertical',
    tabindex: '-1',
  },
  hostDirectives: [CdkMenu],
  styles: [
    `
      :host {
        z-index: var(--z-index-50);
        min-width: var(--spacing-32);
        width: var(--spacing-48);
        overflow: hidden;
        border-radius: var(--border-radius-default);
        background: var(--color-popover);
        color: var(--color-background-fg);
        box-shadow: var(--box-shadow-lg);
      }
    `,
  ],
  standalone: true,
})
export class MenubarMenuComponent {}
