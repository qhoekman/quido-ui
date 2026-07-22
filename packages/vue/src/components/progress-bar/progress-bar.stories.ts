import ProgressBarComponent from './progress-bar.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Feedback/Progress Bar',
  component: ProgressBarComponent,
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100 },
      description: 'The progress value of the bar'
    }
  }
} satisfies Meta<typeof ProgressBarComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 50
  }
}

export const Indeterminate: Story = {
  args: {
    value: undefined
  }
}

export const Composition: Story = {
  render: () => ({
    components: { ProgressBarComponent },
    template: `
      <div style="max-width: 320px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: var(--spacing-1); font-size: var(--font-size-sm);">
          <span>quarterly-report.pdf</span>
          <span style="color: var(--color-muted-fg);">72%</span>
        </div>
        <ProgressBarComponent :value="72" />
      </div>
    `
  })
}
