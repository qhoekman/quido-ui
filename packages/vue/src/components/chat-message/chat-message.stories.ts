import ChatMessageComponent from '@/components/chat-message/chat-message.vue'
import ChatMessageUserComponent from '@/components/chat-message/chat-message-user.vue'
import ChatMessageBubbleComponent from '@/components/chat-message/chat-message-bubble.vue'
import ChatMessageMetaComponent from '@/components/chat-message/chat-message-meta.vue'
import ChatMessageBubbleTextComponent from '@/components/chat-message/chat-message-bubble-text.vue'
import ChatMessageMetaTextComponent from '@/components/chat-message/chat-message-meta-text.vue'
import AvatarComponent from '@/components/avatar/avatar.vue'
import AvatarImageComponent from '@/components/avatar/avatar-image.vue'
import AvatarFallbackComponent from '@/components/avatar/avatar-fallback.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Data Display/Chat Message',
  component: ChatMessageComponent,
  argTypes: {
    variant: {
      control: 'select',
      options: ['sender', 'receiver']
    },
    asChild: {
      control: 'boolean'
    }
  },
  args: {
    variant: 'sender',
    asChild: false
  },
  render: (args) => ({
    components: {
      ChatMessageComponent,
      ChatMessageUserComponent,
      ChatMessageBubbleComponent,
      ChatMessageMetaComponent,
      ChatMessageBubbleTextComponent,
      ChatMessageMetaTextComponent,
      AvatarComponent,
      AvatarImageComponent,
      AvatarFallbackComponent
    },
    setup() {
      return { args }
    },
    template: `
      <ChatMessageComponent v-bind="args">
        <template #avatar>
          <AvatarComponent>
            <AvatarImageComponent
              src="https://pagedone.io/asset/uploads/1710412177.png"
              alt="Jane Doe"
            />
            <AvatarFallbackComponent>JD</AvatarFallbackComponent>
          </AvatarComponent>
        </template>
        <template #user>
          <ChatMessageUserComponent>Jane Doe</ChatMessageUserComponent>
        </template>
        <template #bubble>
          <ChatMessageBubbleComponent>
            <ChatMessageBubbleTextComponent>Hey! Are we still on for the 3pm sync?</ChatMessageBubbleTextComponent>
          </ChatMessageBubbleComponent>
        </template>
        <template #meta>
          <ChatMessageMetaComponent>
            <ChatMessageMetaTextComponent>2:14 PM</ChatMessageMetaTextComponent>
          </ChatMessageMetaComponent>
        </template>
      </ChatMessageComponent>
    `
  })
} satisfies Meta<typeof ChatMessageComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: () => ({
    components: {
      ChatMessageComponent,
      ChatMessageUserComponent,
      ChatMessageBubbleComponent,
      ChatMessageMetaComponent,
      ChatMessageBubbleTextComponent,
      ChatMessageMetaTextComponent,
      AvatarComponent,
      AvatarImageComponent,
      AvatarFallbackComponent
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-4); max-width: 420px;">
        <ChatMessageComponent variant="sender">
          <template #avatar>
            <AvatarComponent>
              <AvatarImageComponent
                src="https://pagedone.io/asset/uploads/1710412177.png"
                alt="Jane Doe"
              />
              <AvatarFallbackComponent>JD</AvatarFallbackComponent>
            </AvatarComponent>
          </template>
          <template #user>
            <ChatMessageUserComponent>Jane Doe</ChatMessageUserComponent>
          </template>
          <template #bubble>
            <ChatMessageBubbleComponent>
              <ChatMessageBubbleTextComponent>Hey! Are we still on for the 3pm sync?</ChatMessageBubbleTextComponent>
            </ChatMessageBubbleComponent>
          </template>
          <template #meta>
            <ChatMessageMetaComponent>
              <ChatMessageMetaTextComponent>2:14 PM</ChatMessageMetaTextComponent>
            </ChatMessageMetaComponent>
          </template>
        </ChatMessageComponent>
        <ChatMessageComponent variant="receiver">
          <template #avatar>
            <AvatarComponent>
              <AvatarImageComponent
                src="https://pagedone.io/asset/uploads/1710412188.png"
                alt="Marcus Lee"
              />
              <AvatarFallbackComponent>ML</AvatarFallbackComponent>
            </AvatarComponent>
          </template>
          <template #user>
            <ChatMessageUserComponent>Marcus Lee</ChatMessageUserComponent>
          </template>
          <template #bubble>
            <ChatMessageBubbleComponent>
              <ChatMessageBubbleTextComponent>Yes, I'll send the deck beforehand.</ChatMessageBubbleTextComponent>
            </ChatMessageBubbleComponent>
          </template>
          <template #meta>
            <ChatMessageMetaComponent>
              <ChatMessageMetaTextComponent>2:15 PM</ChatMessageMetaTextComponent>
            </ChatMessageMetaComponent>
          </template>
        </ChatMessageComponent>
        <ChatMessageComponent variant="sender">
          <template #avatar>
            <AvatarComponent>
              <AvatarImageComponent
                src="https://pagedone.io/asset/uploads/1710412177.png"
                alt="Jane Doe"
              />
              <AvatarFallbackComponent>JD</AvatarFallbackComponent>
            </AvatarComponent>
          </template>
          <template #user>
            <ChatMessageUserComponent>Jane Doe</ChatMessageUserComponent>
          </template>
          <template #bubble>
            <ChatMessageBubbleComponent>
              <ChatMessageBubbleTextComponent>Perfect, see you then.</ChatMessageBubbleTextComponent>
            </ChatMessageBubbleComponent>
          </template>
          <template #meta>
            <ChatMessageMetaComponent>
              <ChatMessageMetaTextComponent>2:16 PM</ChatMessageMetaTextComponent>
            </ChatMessageMetaComponent>
          </template>
        </ChatMessageComponent>
      </div>
    `
  })
}
