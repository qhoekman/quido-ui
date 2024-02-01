import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonComponent from './button.vue'

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
