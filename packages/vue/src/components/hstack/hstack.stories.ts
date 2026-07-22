import HStackComponent from '@/components/hstack/hstack.vue'
import CardComponent from '@/components/card/card.vue'
import CardHeaderComponent from '@/components/card/card-header.vue'
import CardTitleComponent from '@/components/card/card-title.vue'
import CardContentComponent from '@/components/card/card-content.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Layout/HStack',
  component: HStackComponent,
  argTypes: {
    gap: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', '2xl']
    }
  },
  args: {
    gap: 'md'
  },
  render: (args) => ({
    components: {
      HStackComponent,
      CardComponent,
      CardHeaderComponent,
      CardTitleComponent,
      CardContentComponent
    },
    setup() {
      return { args }
    },
    template: `
      <HStackComponent v-bind="args">
        <CardComponent
          v-for="plan in [
            { name: 'Starter', price: '$9/mo' },
            { name: 'Team', price: '$29/mo' },
            { name: 'Business', price: '$79/mo' },
            { name: 'Enterprise', price: 'Custom' },
            { name: 'Nonprofit', price: '$5/mo' }
          ]"
          :key="plan.name"
          style="width: 200px;"
        >
          <CardHeaderComponent>
            <CardTitleComponent>{{ plan.name }}</CardTitleComponent>
          </CardHeaderComponent>
          <CardContentComponent>
            <p>{{ plan.price }}</p>
          </CardContentComponent>
        </CardComponent>
      </HStackComponent>
    `
  })
} satisfies Meta<typeof HStackComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: () => ({
    components: { HStackComponent },
    template: `
      <HStackComponent gap="sm" style="align-items: center;">
        <span style="font-size: var(--font-size-sm); color: var(--color-muted-fg);">Sort by:</span>
        <button style="padding: var(--spacing-1) var(--spacing-3); border-radius: var(--border-radius-md); border: var(--border-width-default) solid var(--color-border); background: var(--color-primary); color: var(--color-primary-fg); font-size: var(--font-size-sm);">Newest</button>
        <button style="padding: var(--spacing-1) var(--spacing-3); border-radius: var(--border-radius-md); border: var(--border-width-default) solid var(--color-border); background: transparent; font-size: var(--font-size-sm);">Price</button>
        <button style="padding: var(--spacing-1) var(--spacing-3); border-radius: var(--border-radius-md); border: var(--border-width-default) solid var(--color-border); background: transparent; font-size: var(--font-size-sm);">Rating</button>
      </HStackComponent>
    `
  })
}
