import { Component, Input } from '@angular/core';

@Component({
  selector: 'div[qui-callout]',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: {
    role: 'alert',
    '[class]': 'getClassList()',
    '[attr.aria-label]': 'alert',
    'data-testid': 'qui-callout',
  },
  styles: [
    `
      :host {
        position: relative;
        width: 100%;
        border-radius: var(--border-radius-lg);
        border: var(--border-width-default) solid;
        padding: var(--spacing-4);
        font-size: var(--font-size-sm);
      }

      :host(.variant--default) {
        background-color: var(--color-card);
        color: var(--color-card-fg);
      }

      :host(.variant--destructive) {
        border-color: var(--color-danger);
        color: var(--color-danger);
      }

      /* stylelint-disable-next-line selector-pseudo-element-no-unknown */
      :host ::ng-deep *:first-child ~ * {
        padding-left: var(--spacing-9);
      }
    `,
  ],
})
export class CalloutComponent {
  @Input() variant: 'default' | 'destructive' = 'default';

  getClassList() {
    return ['variant--' + this.variant];
  }
}
