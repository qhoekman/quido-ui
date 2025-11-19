import { Component } from '@angular/core';

@Component({
  selector: '[pui-chat-message-bubble]',
  template: ` <ng-content></ng-content> `,
  host: {
    'data-testid': 'pui-chat-message-bubble',
  },
  styles: [
    `
      :host {
        display: inline-flex;
        justify-content: flex-start;
        align-items: center;
        gap: var(--spacing-3);
        padding: var(--spacing-3-5) var(--spacing-2);
        border-radius: var(--border-radius-default);
      }
    `,
  ],
  standalone: true,
})
export class ChatMessageBubbleComponent {}
