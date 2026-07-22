import StackComponent from '@/components/stack/stack.vue'
import CardComponent from '@/components/card/card.vue'
import CardHeaderComponent from '@/components/card/card-header.vue'
import CardTitleComponent from '@/components/card/card-title.vue'
import CardContentComponent from '@/components/card/card-content.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Layout/Stack',
  component: StackComponent,
  argTypes: {
    gap: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', '2xl']
    },
    direction: {
      control: 'select',
      options: ['row', 'column']
    },
    items: {
      control: 'select',
      options: ['center', 'start', 'end', 'between', 'around', 'initial']
    },
    align: {
      control: 'select',
      options: ['center', 'start', 'end', 'baseline', 'stretch', 'initial']
    }
  },
  args: {
    gap: 'md',
    direction: 'row',
    items: 'initial',
    align: 'initial'
  },
  render: (args) => ({
    components: {
      StackComponent,
      CardComponent,
      CardHeaderComponent,
      CardTitleComponent,
      CardContentComponent
    },
    setup() {
      return { args }
    },
    template: `
      <StackComponent v-bind="args" style="max-width: var(--breakpoint-xs);">
        <div
          v-for="index in 5"
          :key="index"
          style="
            background-color: var(--color-blue-500);
            color: var(--color-gray-50);
            width: var(--spacing-10);
            height: var(--spacing-10);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: var(--spacing-1) var(--spacing-4);
          "
        >
          {{ index }}
        </div>
      </StackComponent>
    `
  })
} satisfies Meta<typeof StackComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: () => ({
    components: { StackComponent },
    template: `
      <StackComponent direction="column" gap="sm" style="max-width: var(--breakpoint-xs);">
        <div
          v-for="member in [
            { name: 'Ava Chen', role: 'Product Designer' },
            { name: 'Marcus Reyes', role: 'Frontend Engineer' },
            { name: 'Priya Nair', role: 'Engineering Manager' }
          ]"
          :key="member.name"
          style="display: flex; justify-content: space-between; padding: var(--spacing-2) 0; border-bottom: var(--border-width-default) solid var(--color-border);"
        >
          <span style="font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">{{ member.name }}</span>
          <span style="font-size: var(--font-size-sm); color: var(--color-muted-fg);">{{ member.role }}</span>
        </div>
      </StackComponent>
    `
  })
}
