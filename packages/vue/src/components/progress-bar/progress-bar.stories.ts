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
