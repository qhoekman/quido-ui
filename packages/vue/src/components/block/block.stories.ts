import BlockComponent from '@/components/block/block.vue'
import BlockTitleComponent from '@/components/block/block-title.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Features/Mobile/Components/Block',
  component: BlockComponent,
  argTypes: {
    inset: {
      control: 'boolean'
    },
    outline: {
      control: 'boolean'
    },
    asChild: {
      control: 'boolean'
    }
  },
  args: {
    inset: false,
    outline: false,
    asChild: false
  },
  render: (args) => ({
    components: { BlockComponent, BlockTitleComponent },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: var(--spacing-4);">
        <BlockTitleComponent>Block Title</BlockTitleComponent>
        <BlockComponent v-bind="args">
          Enable push notifications to stay up to date with new messages,
          mentions, and account activity. You can change this anytime from
          Settings.
        </BlockComponent>
      </div>
    `
  })
} satisfies Meta<typeof BlockComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithInset: Story = {
  args: {
    inset: true
  }
}

export const WithOutline: Story = {
  args: {
    inset: true,
    outline: true
  }
}

export const Composition: Story = {
  render: () => ({
    components: { BlockComponent, BlockTitleComponent },
    template: `
      <div style="padding: var(--spacing-4);">
        <BlockTitleComponent>Account</BlockTitleComponent>
        <BlockComponent inset>
          Signed in as jordan@pulse.quido.online. Manage your profile,
          password, and connected devices from Settings.
        </BlockComponent>
        <BlockTitleComponent>Notifications</BlockTitleComponent>
        <BlockComponent inset outline>
          Get notified about new messages, mentions, and weekly summaries. You
          can turn these off anytime.
        </BlockComponent>
      </div>
    `
  })
}
