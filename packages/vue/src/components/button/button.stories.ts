import ButtonComponent from './button.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

type Story = StoryObj<typeof ButtonComponent>

const meta: Meta<typeof ButtonComponent> = {
  title: 'Components/Actions/Button',
  component: ButtonComponent,
  args: {
    variant: 'default',
    size: 'default',
    // @ts-ignore - children of the component
    default: 'Button'
  }
}

export const Default: Story = {}

export default meta
