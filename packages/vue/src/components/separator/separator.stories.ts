import type { Meta, StoryObj } from '@storybook/vue3'
import SeparatorComponent from './separator.vue'

const meta: Meta<typeof SeparatorComponent> = {
  title: 'Components/Layout/Separator',
  component: SeparatorComponent,
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical']
    },
    decorative: {
      control: { type: 'boolean' }
    }
  },
  args: {
    orientation: 'horizontal',
    decorative: true
  }
}

export default meta
type Story = StoryObj<typeof SeparatorComponent>

export const Default: Story = {
  render: (args) => ({
    components: { SeparatorComponent },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 100px;">
        <SeparatorComponent v-bind="args" />
      </div>
    `
  })
}
