import DraggableListComponent from '@/components/draggable-list/draggable-list.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'

const meta = {
  title: 'Components/Data Entry/Draggable List',
  component: DraggableListComponent,
  argTypes: {
    items: {
      control: 'object'
    },
    asChild: {
      control: 'boolean'
    },
    as: {
      control: 'select',
      options: ['ul', 'div']
    }
  },
  args: {
    items: ['Design mockups', 'Write copy', 'Review PR'],
    asChild: false,
    as: 'ul'
  },
  render: (args: any) => ({
    components: { DraggableListComponent },
    setup() {
      const items = ref(args.items)
      const handleReorder = (newOrder: string[]) => {
        items.value = newOrder
        // eslint-disable-next-line no-console
        console.log('New order:', newOrder)
      }
      return {
        args,
        items,
        handleReorder
      }
    },
    template: `
      <DraggableListComponent
        :items="items"
        :as-child="args.asChild"
        :as="args.as"
        @reorder="handleReorder"
      >
        <template #default="{ item, index }">
          {{ index + 1 }}. {{ item }}
        </template>
      </DraggableListComponent>
    `
  })
} satisfies Meta<typeof DraggableListComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: () => ({
    components: { DraggableListComponent },
    setup() {
      const items = ref(['Fix login redirect bug', 'Write onboarding docs', 'Ship dark mode', 'Investigate flaky test'])
      const handleReorder = (newOrder: string[]) => {
        items.value = newOrder
      }
      return { items, handleReorder }
    },
    template: `
      <div style="max-width: 320px; padding: var(--spacing-6); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
        <h3 style="margin: 0 0 var(--spacing-1);">Sprint Backlog</h3>
        <p style="margin: 0 0 var(--spacing-4); color: var(--color-muted-fg);">Drag items to reprioritize this sprint.</p>
        <DraggableListComponent :items="items" @reorder="handleReorder">
          <template #default="{ item, index }">
            {{ index + 1 }}. {{ item }}
          </template>
        </DraggableListComponent>
      </div>
    `
  })
}
