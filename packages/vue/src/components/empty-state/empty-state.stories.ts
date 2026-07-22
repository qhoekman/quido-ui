import EmptyStateComponent from '@/components/empty-state/empty-state.vue'
import EmptyStateIconComponent from '@/components/empty-state/empty-state-icon.vue'
import EmptyStateTitleComponent from '@/components/empty-state/empty-state-title.vue'
import EmptyStateDescriptionComponent from '@/components/empty-state/empty-state-description.vue'
import EmptyStateActionGroupComponent from '@/components/empty-state/empty-state-action-group.vue'
import ButtonComponent from '@/components/button/button.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Folder, Search } from 'lucide-vue-next'

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
      Folder
    },
    setup() {
      return { args }
    },
    template: `
      <EmptyStateComponent :size="args.size">
        <template #icon>
          <EmptyStateIconComponent>
            <Folder :size="48" />
          </EmptyStateIconComponent>
        </template>
        <template #title>
          <EmptyStateTitleComponent>No projects yet</EmptyStateTitleComponent>
        </template>
        <template #description>
          <EmptyStateDescriptionComponent>
            Create your first project to get started.
          </EmptyStateDescriptionComponent>
        </template>
        <template #action-group>
          <EmptyStateActionGroupComponent>
            <ButtonComponent>Create project</ButtonComponent>
          </EmptyStateActionGroupComponent>
        </template>
      </EmptyStateComponent>
    `
  })
} satisfies Meta<typeof EmptyStateComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: (args) => ({
    components: {
      EmptyStateComponent,
      EmptyStateIconComponent,
      EmptyStateTitleComponent,
      EmptyStateDescriptionComponent,
      EmptyStateActionGroupComponent,
      ButtonComponent,
      Search
    },
    setup() {
      return { args }
    },
    template: `
      <div style="max-width: 480px; padding: var(--spacing-6); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
        <EmptyStateComponent size="sm">
          <template #icon>
            <EmptyStateIconComponent>
              <Search :size="40" />
            </EmptyStateIconComponent>
          </template>
          <template #title>
            <EmptyStateTitleComponent>No results found</EmptyStateTitleComponent>
          </template>
          <template #description>
            <EmptyStateDescriptionComponent>
              We couldn't find anything matching "invoice #4521". Try a different search term.
            </EmptyStateDescriptionComponent>
          </template>
          <template #action-group>
            <EmptyStateActionGroupComponent>
              <ButtonComponent variant="outline">Clear filters</ButtonComponent>
            </EmptyStateActionGroupComponent>
          </template>
        </EmptyStateComponent>
      </div>
    `
  })
}
