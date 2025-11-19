import { CdkMenu, CdkMenuTrigger } from '@angular/cdk/menu';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: '[pui-navigation-menu-dropdown-content]',
  template: `<ng-content></ng-content>`,
  host: {
    'data-testid': 'pui-navigation-menu-dropdown-content',
    role: 'menu',
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
        background: var(--color-background);
        color: var(--color-background-fg);
        box-shadow: var(--box-shadow-lg);
        border: 1px solid var(--color-border);
      }
    `,
  ],
  standalone: true,
})
export class NavigationMenuDropdownContentComponent {
  constructor(private menuTrigger: CdkMenuTrigger) {}

  @HostListener('mouseleave')
  handleMouseLeave() {
    this.menuTrigger.close();
  }
}
