import { Component } from '@angular/core';

@Component({
  selector: '[qui-chat-message-bubble-text]',
  template: ` <ng-content></ng-content> `,
  host: {
    'data-testid': 'qui-chat-message-bubble-text',
  },
  styles: [
    `
      :host {
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-normal);
        line-height: var(--line-height-snug);
        margin: 0;
      }
    `,
  ],
  standalone: true,
})
export class ChatMessageBubbleTextComponent {}
