import { Component, Input } from '@angular/core';

export type ToastVariants = {
  variant: 'default' | 'destructive';
};

@Component({
  selector: 'pui-toast',
  standalone: true,
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'pui-toast',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: var(--spacing-2);
        box-sizing: border-box;
        padding: var(--spacing-4);
        padding-right: var(--spacing-8);
        border-radius: var(--border-radius-md);
        box-shadow: var(--box-shadow-lg);
        transition: all 0.3s;
      }

      :host-context(.variant--default) {
        background-color: var(--color-background);
        color: var(--color-background-fg);
      }

      :host-context(.variant--destructive) {
        background-color: var(--color-danger);
        color: var(--color-danger-fg);
      }
    `,
  ],
})
export class ToastComponent {
  @Input() variant: ToastVariants['variant'] = 'default';

  getClassList() {
    return `variant--${this.variant}`;
  }
}
