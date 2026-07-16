import LoaderComponent from './loader.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Feedback/Loader',
  component: LoaderComponent,
  argTypes: {
    active: {
      control: 'boolean'
    },
    variant: {
      control: 'select',
      options: ['spinner']
    }
  },
  args: {
    active: true,
    variant: 'spinner'
  }
} satisfies Meta<typeof LoaderComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    active: true,
    variant: 'spinner'
  }
}
