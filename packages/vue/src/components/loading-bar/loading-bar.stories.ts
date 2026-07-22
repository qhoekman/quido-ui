import LoadingBarComponent from './loading-bar.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Feedback/Loading Bar',
  component: LoadingBarComponent,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    loading: {
      control: 'boolean'
    }
  },
  args: {
    loading: true
  }
} satisfies Meta<typeof LoadingBarComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    loading: true
  }
}

export const Composition: Story = {
  render: () => ({
    components: { LoadingBarComponent },
    template: `
      <div>
        <LoadingBarComponent loading />
        <div style="display: flex; align-items: center; justify-content: space-between; padding: var(--spacing-4) var(--spacing-6); border-bottom: var(--border-width-default) solid var(--color-border);">
          <h3 style="margin: 0;">Dashboard</h3>
          <span style="color: var(--color-muted-fg); font-size: var(--font-size-sm);">Refreshing data...</span>
        </div>
      </div>
    `
  })
}
