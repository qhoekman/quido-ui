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
        <ButtonComponent variant="outline">Bold</ButtonComponent>
        <ButtonComponent variant="outline">Italic</ButtonComponent>
        <ButtonComponent variant="outline">Underline</ButtonComponent>
      </ButtonGroupComponent>
    `
  })
} satisfies Meta<typeof ButtonGroupComponent>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: () => ({
    components: { ButtonGroupComponent, ButtonComponent },
    template: `
      <div style="display: flex; align-items: center; justify-content: space-between; gap: var(--spacing-4);">
        <h2 style="margin: 0;">Sprint Backlog</h2>
        <ButtonGroupComponent>
          <ButtonComponent variant="outline">List</ButtonComponent>
          <ButtonComponent variant="outline">Board</ButtonComponent>
          <ButtonComponent variant="outline">Calendar</ButtonComponent>
        </ButtonGroupComponent>
      </div>
    `
  })
}
