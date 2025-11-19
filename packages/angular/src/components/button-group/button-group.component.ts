import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'div[qui-button-group]',
  standalone: true,
  imports: [CommonModule],
  host: {
    'data-testid': 'qui-button-group',
  },
  template: `<ng-content></ng-content>`,
  styles: [
    `
      /* stylelint-disable selector-pseudo-element-no-unknown */
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        isolation: isolate;
        border-radius: var(--border-radius-md);
        box-shadow: var(--box-shadow-default);
      }

      :host ::ng-deep a,
      :host ::ng-deep button {
        position: relative;
        border-radius: 0;
        margin: 0;
      }

      :host ::ng-deep a:first-child,
      :host ::ng-deep button:first-child {
        border-top-left-radius: var(--border-radius-md);
        border-bottom-left-radius: var(--border-radius-md);
      }

      :host ::ng-deep a:last-child,
      :host ::ng-deep button:last-child {
        border-top-right-radius: var(--border-radius-md);
        border-bottom-right-radius: var(--border-radius-md);
      }
    `,
  ],
})
export class ButtonGroupComponent {}
