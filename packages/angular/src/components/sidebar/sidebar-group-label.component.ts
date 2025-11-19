import { Component, Input } from '@angular/core';

@Component({
  selector: '[qui-sidebar-group-label]',
  standalone: true,
  host: {
    'data-testid': 'qui-sidebar-group-label',
    '[class]': 'getClassList()',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      /* stylelint-disable selector-pseudo-element-no-unknown */
      :host {
        display: flex;
        height: var(--spacing-8);
        align-items: center;
        border-radius: var(--border-radius-md);
        margin: 0;
        padding: 0 var(--spacing-2);
        font-size: var(--font-size-xs);
        font-weight: var(--font-weight-medium);
        color: var(--color-sidebar-fg);
        transition: margin 0.2s ease-linear, opacity 0.2s ease-linear;
        outline: none;

        &:focus-visible {
          box-shadow: 0 0 0 2px var(--color-ring);
        }
      }

      :host-context(.collapsible--icon) {
        margin-top: calc(-1 * var(--spacing-8));
        opacity: 0;
      }

      ::ng-deep svg {
        width: var(--spacing-4);
        height: var(--spacing-4);
        flex-shrink: 0;
      }
    `,
  ],
})
export class SidebarGroupLabelComponent {
  @Input() collapsibleIcon = false;

  getClassList() {
    return {
      'collapsible-icon': this.collapsibleIcon,
    };
  }
}
