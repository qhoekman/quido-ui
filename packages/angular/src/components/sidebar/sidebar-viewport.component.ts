import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'div[pui-sidebar-viewport]',
  host: {
    'data-sidebar': 'viewport',
    'data-testid': 'pui-sidebar-viewport',
    '[class]': 'getClassList()',
    '[style]': 'getStyle()',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      .pui-sidebar-viewport {
        display: flex;
        min-height: var(--size-svh);
        width: 100%;
        background-color: var(--color-sidebar);
        color: var(--color-sidebar-fg);
      }

      .pui-sidebar-viewport.variant--inset {
        background-color: var(--color-sidebar-accent);
      }
    `,
  ],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
})
export class SidebarViewportComponent {
  @Input() variant: 'default' | 'inset' = 'default';
  private sidebarWidth = 'var(--size-full)';
  private sidebarWidthIcon = 'var(--size-auto)';
  private sidebarWidthMobile = 'var(--size-full)';

  getSidebarWidth() {
    return this.sidebarWidth;
  }

  getSidebarWidthIcon() {
    return this.sidebarWidthIcon;
  }

  getSidebarWidthMobile() {
    return this.sidebarWidthMobile;
  }

  setSidebarWidth(width: string) {
    this.sidebarWidth = width;
  }

  setSidebarWidthIcon(width: string) {
    this.sidebarWidthIcon = width;
  }

  setSidebarWidthMobile(width: string) {
    this.sidebarWidthMobile = width;
  }

  getStyle() {
    return {
      '--sidebar-width': this.getSidebarWidth(),
      '--sidebar-width-icon': this.getSidebarWidthIcon(),
      '--sidebar-width-mobile': this.getSidebarWidthMobile(),
    };
  }

  getClassList() {
    return {
      ['pui-sidebar-viewport']: true,
      [`variant--${this.variant}`]: true,
    };
  }
}
