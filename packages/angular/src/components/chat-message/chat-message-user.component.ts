import { Component } from '@angular/core';
@Component({
  selector: '[pui-chat-message-user]',
  template: ` <ng-content></ng-content> `,
  host: {
    'data-testid': 'pui-chat-message-user',
  },
  styles: [
    `
      :host {
        color: hsl(from var(--color-background-fg) h s l / 80%);
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-semibold);
        line-height: var(--line-height-snug);
        padding-bottom: var(--spacing-1);
      }
    `,
  ],
  standalone: true,
})
export class ChatMessageUserComponent {}
