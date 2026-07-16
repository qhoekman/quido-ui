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
    items: ['Item 1', 'Item 2', 'Item 3'],
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
