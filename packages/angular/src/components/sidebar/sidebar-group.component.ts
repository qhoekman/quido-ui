import { Component, Input } from '@angular/core';

export type SidebarGroupVariants = {
  hide: 'none' | 'icon  ';
};

@Component({
  selector: 'div[qui-sidebar-group]',
  standalone: true,
  host: {
    'data-testid': 'qui-sidebar-group',
    '[class]': 'getClassList()',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        position: relative;
        display: flex;
        width: 100%;
        min-width: 0;
        flex-direction: column;
        padding: var(--spacing-2);
      }

      :host-context(.collapsible--icon) :host(.hide--icon) {
        display: none;
      }
    `,
  ],
})
export class SidebarGroupComponent {
  @Input() hide: SidebarGroupVariants['hide'] = 'none';

  getClassList() {
    return {
      ['qui-sidebar-group']: true,
      [`hide--${this.hide}`]: true,
    };
  }
}
