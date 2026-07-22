import VStackComponent from '@/components/vstack/vstack.vue'
import CardComponent from '@/components/card/card.vue'
import CardHeaderComponent from '@/components/card/card-header.vue'
import CardTitleComponent from '@/components/card/card-title.vue'
import CardContentComponent from '@/components/card/card-content.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Layout/VStack',
  component: VStackComponent,
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
      VStackComponent,
      CardComponent,
      CardHeaderComponent,
      CardTitleComponent,
      CardContentComponent
    },
    setup() {
      return { args }
    },
    template: `
      <VStackComponent v-bind="args" style="width: 320px;">
        <CardComponent
          v-for="notification in [
            { title: 'New comment', body: 'Ava Chen commented on your pull request.' },
            { title: 'Build passed', body: 'The main branch build completed successfully.' },
            { title: 'Deploy complete', body: 'Version 2.4.0 was deployed to production.' },
            { title: 'New follower', body: 'Marcus Reyes started following your project.' },
            { title: 'Reminder', body: 'Sprint review is scheduled for tomorrow at 10am.' }
          ]"
          :key="notification.title"
        >
          <CardHeaderComponent>
            <CardTitleComponent>{{ notification.title }}</CardTitleComponent>
          </CardHeaderComponent>
          <CardContentComponent>
            <p>{{ notification.body }}</p>
          </CardContentComponent>
        </CardComponent>
      </VStackComponent>
    `
  })
} satisfies Meta<typeof VStackComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: () => ({
    components: { VStackComponent },
    template: `
      <VStackComponent gap="sm" style="width: 260px;">
        <span style="font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">Email notifications</span>
        <label style="display: flex; align-items: center; gap: var(--spacing-2); font-size: var(--font-size-sm);">
          <input type="checkbox" checked /> Comments
        </label>
        <label style="display: flex; align-items: center; gap: var(--spacing-2); font-size: var(--font-size-sm);">
          <input type="checkbox" checked /> Deploys
        </label>
        <label style="display: flex; align-items: center; gap: var(--spacing-2); font-size: var(--font-size-sm);">
          <input type="checkbox" /> Marketing updates
        </label>
      </VStackComponent>
    `
  })
}
