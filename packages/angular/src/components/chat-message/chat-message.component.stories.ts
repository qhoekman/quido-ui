import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { AvatarFallbackComponent } from '../avatar/avatar-fallback.component';
import { AvatarImageComponent } from '../avatar/avatar-image.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { ChatMessageBubbleComponent } from './chat-message-bubble.component';
import { ChatMessageMetaComponent } from './chat-message-meta.component';
import { ChatMessageUserComponent } from './chat-message-user.component';
import { ChatMessageComponent } from './chat-message.component';
import { ChatMessageBubbleTextComponent } from './chat-message-bubble-text.component';
import { ChatMessageMetaTextComponent } from './chat-message-meta-text.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<ChatMessageComponent> = {
  title: 'Components/Data Display/Chat Message',
  component: ChatMessageComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ChatMessageComponent,
        ChatMessageUserComponent,
        ChatMessageBubbleComponent,
        ChatMessageMetaComponent,
        ChatMessageMetaTextComponent,
        ChatMessageBubbleTextComponent,
        AvatarComponent,
        AvatarImageComponent,
        AvatarFallbackComponent,
        StoryComponent,
      ],
    }),
  ],
  argTypes: {
    // Define any controls for the chat message component if needed
  },
};
export default meta;

type Story = StoryObj<ChatMessageComponent>;

export const Default: Story = {
  args: {
    // Add any default args if necessary
  },
  render: (args) => ({
    props: args,
    template: `
      <pui-story variant="default">
        <div pui-chat-message variant="sender">
          <pui-avatar #avatar1>
            <img
              pui-avatar-image
              src="https://pagedone.io/asset/uploads/1710412177.png"
              (fallback)="avatar1.onFallback($event)"
            />
            <pui-avatar-fallback>UN</pui-avatar-fallback>
          </pui-avatar>
          <div pui-chat-message-user>User Name</div>
          <div pui-chat-message-bubble>
            <h5 pui-chat-message-bubble-text>Message content goes here.</h5>
          </div>
          <div pui-chat-message-meta>
            <h6 pui-chat-message-meta-text>12:00 PM</h6>
          </div>
        </div>
        <div pui-chat-message variant="receiver">
          <pui-avatar #avatar2>
            <img
              pui-avatar-image
              src="https://pagedone.io/asset/uploads/1710412188.png"
              (fallback)="avatar2.onFallback($event)"
            />
            <pui-avatar-fallback>JD</pui-avatar-fallback>
          </pui-avatar>
          <div pui-chat-message-user>John Doe</div>
          <div pui-chat-message-bubble>
            <h5 pui-chat-message-bubble-text>Message content goes here.</h5>
          </div>
          <div pui-chat-message-meta>
            <h6 pui-chat-message-meta-text>12:01 PM</h6>
          </div>
        </div>
      </pui-story>
    `,
  }),
};
