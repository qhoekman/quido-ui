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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quisquam
          rerum, eos qui aliquid accusamus odit, nemo porro at velit accusantium
          atque ullam iste ipsa hic, saepe culpa. Sapiente, dolorem!
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
