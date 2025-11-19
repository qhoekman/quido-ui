import { Component, Input } from '@angular/core';

@Component({
  selector: 'main[qui-sidebar-inset]',
  standalone: true,
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'qui-sidebar-inset',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        position: relative;
        display: flex;
        flex-direction: column;
        min-height: var(--size-svh);
        flex: 1;
        background-color: var(--color-background);
        transition: min-height 0.3s, margin 0.3s, border-radius 0.3s,
          box-shadow 0.3s;
      }

      :host-context(.variant--inset) {
        min-height: calc(100svh - var(--spacing-4));
      }

      @media (width >= 768px) {
        :host-context(.variant--inset) {
          margin: var(--spacing-2);
          border-radius: var(--border-radius-xl);
          box-shadow: var(--box-shadow-md);
          margin-left: 0;
        }

        :host-context(.state--collapsed.variant--inset) {
          margin-left: var(--spacing-2);
        }
      }
    `,
  ],
})
export class SidebarInsetComponent {
  @Input() variant: 'inset' | 'default' = 'default';
  @Input() state: 'collapsed' | 'expanded' = 'expanded';

  getClassList() {
    return {
      [`variant--${this.variant}`]: true,
      [`state--${this.state}`]: true,
    };
  }
}
