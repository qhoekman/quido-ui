import ButtonComponent from '@/components/button/button.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Actions/Button',
  component: ButtonComponent,
  args: {
    variant: 'default',
    size: 'default',
    // @ts-ignore - children of the component
    default: 'Button'
  },
  render: (args) => ({
    components: { ButtonComponent },
    setup() {
      return { args }
    },
    template: '<ButtonComponent v-bind="args">Button</ButtonComponent>'
  })
} satisfies Meta<typeof ButtonComponent>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
