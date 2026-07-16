import EmptyStateComponent from '@/components/empty-state/empty-state.vue'
import EmptyStateIconComponent from '@/components/empty-state/empty-state-icon.vue'
import EmptyStateTitleComponent from '@/components/empty-state/empty-state-title.vue'
import EmptyStateDescriptionComponent from '@/components/empty-state/empty-state-description.vue'
import EmptyStateActionGroupComponent from '@/components/empty-state/empty-state-action-group.vue'
import ButtonComponent from '@/components/button/button.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { AlertTriangle } from 'lucide-vue-next'

const meta = {
  title: 'Components/Data Display/Empty State',
  component: EmptyStateComponent,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    }
  },
  args: {
    size: 'md'
  },
  render: (args) => ({
    components: {
      EmptyStateComponent,
      EmptyStateIconComponent,
      EmptyStateTitleComponent,
      EmptyStateDescriptionComponent,
      EmptyStateActionGroupComponent,
      ButtonComponent,
      AlertTriangle
    },
    setup() {
      return { args }
    },
    template: `
      <EmptyStateComponent :size="args.size">
        <template #icon>
          <EmptyStateIconComponent>
            <AlertTriangle :size="48" />
          </EmptyStateIconComponent>
        </template>
        <template #title>
          <EmptyStateTitleComponent>Empty State Title</EmptyStateTitleComponent>
        </template>
        <template #description>
          <EmptyStateDescriptionComponent>
            This is a description of the empty state.
          </EmptyStateDescriptionComponent>
        </template>
        <template #action-group>
          <EmptyStateActionGroupComponent>
            <ButtonComponent>Action</ButtonComponent>
          </EmptyStateActionGroupComponent>
        </template>
      </EmptyStateComponent>
    `
  })
} satisfies Meta<typeof EmptyStateComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
