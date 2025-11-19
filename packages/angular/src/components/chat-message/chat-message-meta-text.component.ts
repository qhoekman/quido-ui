import { Component } from '@angular/core';

@Component({
  selector: '[qui-chat-message-meta-text]',
  template: ` <ng-content></ng-content> `,
  host: {
    'data-testid': 'qui-chat-message-meta-text',
  },
  styles: [
    `
      :host {
        color: hsl(from var(--color-background-fg) h s l / 80%);
        font-size: var(--font-size-xs);
        font-weight: var(--font-weight-normal);
        line-height: var(--line-height-4);
        padding-top: var(--spacing-1);
        padding-bottom: var(--spacing-1);
        width: 100%;
        margin: 0;
      }
    `,
  ],
  standalone: true,
})
export class ChatMessageMetaTextComponent {}
