import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'div[pui-sidebar-content]',
  standalone: true,
  imports: [CommonModule],
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'pui-sidebar-content',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: flex;
        min-height: 0;
        flex: 1 1 auto;
        flex-direction: column;
        gap: var(--spacing-2);
        overflow: auto;
      }

      :host-context(.collapsible--icon) {
        overflow: hidden;
      }
    `,
  ],
})
export class SidebarContentComponent {
  @Input() collapsibleIcon = false;

  getClassList() {
    return {
      'collapsible-icon': this.collapsibleIcon,
    };
  }
}
