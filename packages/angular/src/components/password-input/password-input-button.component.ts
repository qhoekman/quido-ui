import { Component } from '@angular/core';

@Component({
  selector: 'button[pui-password-input-button]',
  standalone: true,
  host: {
    'data-testid': 'pui-password-input-button',
  },
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        height: 100%;
        background: none;
        border: none;
        color: var(--color-input-fg);
        padding: 0 var(--spacing-2);
        cursor: pointer;
      }
    `,
  ],
})
export class PasswordInputButtonComponent {}
