import type { Meta, StoryObj } from '@storybook/vue3'
import VisuallyHiddenComponent from './visually-hidden.vue'
import ButtonComponent from '../button/button.vue'

const meta: Meta<typeof VisuallyHiddenComponent> = {
  title: 'Components/Accessibility/Visually Hidden',
  component: VisuallyHiddenComponent,
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['span', 'div', 'p']
    },
    asChild: {
      control: { type: 'boolean' }
    }
  },
  args: {
    as: 'span',
    asChild: false
  }
}

export default meta
type Story = StoryObj<typeof VisuallyHiddenComponent>

export const Default: Story = {
  render: (args) => ({
    components: { VisuallyHiddenComponent, ButtonComponent },
    setup() {
      return { args }
    },
    template: `
      <div>
        <VisuallyHiddenComponent v-bind="args">
          This text is visually hidden but accessible to screen readers.
        </VisuallyHiddenComponent>
        <ButtonComponent>Visible Button</ButtonComponent>
      </div>
    `
  })
}
