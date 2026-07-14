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
