import { Component, Input } from '@angular/core';

export type ChatMessageVariants = {
  variant: 'sender' | 'receiver';
};

@Component({
  selector: 'div[pui-chat-message]',
  host: {
    '[class]': 'getClassList()',
    'data-testid': 'pui-chat-message',
  },
  template: `
    <ng-content select="[pui-avatar], pui-avatar"></ng-content>
    <div class="pui-chat-message__grid">
      <ng-content select="[pui-chat-message-user]"></ng-content>
      <div class="pui-chat-message__bubble">
        <ng-content select="[pui-chat-message-bubble]"></ng-content>
        <ng-content select="[pui-chat-message-meta]"></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      /* stylelint-disable selector-pseudo-element-no-unknown */
      :host {
        display: flex;
        gap: var(--spacing-2-5);
        margin-bottom: var(--spacing-4);
      }

      :host(.variant--sender) {
        flex-direction: row-reverse;
      }

      :host(.variant--receiver) {
        flex-direction: row;
      }

      :host(.variant--sender) ::ng-deep [pui-chat-message-bubble] {
        background-color: var(--color-primary);
        color: var(--color-primary-fg);
      }

      :host(.variant--receiver) ::ng-deep [pui-chat-message-bubble] {
        background-color: var(--color-secondary);
        color: var(--color-secondary-fg);
      }

      :host(.variant--sender) ::ng-deep [pui-chat-message-user] {
        text-align: right;
      }

      :host(.variant--receiver) ::ng-deep [pui-chat-message-user] {
        text-align: left;
      }

      :host(.variant--sender) ::ng-deep [pui-chat-message-meta] {
        text-align: left;
      }

      :host(.variant--receiver) ::ng-deep [pui-chat-message-meta] {
        text-align: right;
      }

      :host .pui-chat-message__grid {
        display: grid;
      }

      :host .pui-chat-message__bubble {
        display: grid;
        width: max-content;
      }
    `,
  ],
  standalone: true,
})
export class ChatMessageComponent {
  @Input() variant: ChatMessageVariants['variant'] = 'sender';

  getClassList() {
    return [`variant--${this.variant}`].join(' ');
  }
}
