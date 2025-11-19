import { Component } from '@angular/core';

@Component({
  selector: '[qui-chat-message-meta]',
  template: ` <ng-content></ng-content> `,
  host: {
    'data-testid': 'qui-chat-message-meta',
  },
  styles: [
    `
      :host {
        display: inline-flex;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: var(--spacing-2-5);
      }
    `,
  ],
  standalone: true,
})
export class ChatMessageMetaComponent {}
