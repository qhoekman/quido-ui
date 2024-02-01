import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonComponent from './button.vue'

type Story = StoryObj<ButtonComponent>

const meta: Meta<ButtonComponent> = {
  title: 'Components/Actions/Button',
  component: ButtonComponent,
  args: {
    variant: 'default',
    size: 'default',
    type: 'button',
    disabled: false,
    default: 'Button'
  }
}

export const Default: Story = {}

export default meta
