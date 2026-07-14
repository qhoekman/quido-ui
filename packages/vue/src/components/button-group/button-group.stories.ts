import ButtonGroupComponent from '@/components/button-group/button-group.vue'
import ButtonComponent from '@/components/button/button.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Actions/Button Group',
  component: ButtonGroupComponent,
  argTypes: {
    asChild: {
      control: 'boolean'
    }
  },
  args: {
    asChild: false
  },
  render: (args) => ({
    components: { ButtonGroupComponent, ButtonComponent },
    setup() {
      return { args }
    },
    template: `
      <ButtonGroupComponent v-bind="args">
        <ButtonComponent variant="outline">Button 1</ButtonComponent>
        <ButtonComponent variant="outline">Button 2</ButtonComponent>
        <ButtonComponent variant="outline">Button 3</ButtonComponent>
      </ButtonGroupComponent>
    `
  })
} satisfies Meta<typeof ButtonGroupComponent>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
