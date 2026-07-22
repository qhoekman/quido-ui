import ButtonComponent from '@/components/button/button.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Actions/Button',
  component: ButtonComponent,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive', 'outline', 'ghost', 'link']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon']
    },
    disabled: {
      control: 'boolean'
    },
    loading: {
      control: 'boolean'
    },
    fullWidth: {
      control: 'boolean'
    },
    asChild: {
      control: 'boolean'
    },
    as: {
      control: 'select',
      options: ['button', 'a']
    }
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    fullWidth: false,
    asChild: false,
    as: 'button'
  },
  render: (args) => ({
    components: { ButtonComponent },
    setup() {
      return { args }
    },
    template: '<ButtonComponent v-bind="args">Continue</ButtonComponent>'
  })
} satisfies Meta<typeof ButtonComponent>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: () => ({
    components: { ButtonComponent },
    template: `
      <div style="display: flex; gap: var(--spacing-3); justify-content: flex-end;">
        <ButtonComponent variant="outline">Cancel</ButtonComponent>
        <ButtonComponent variant="primary">Save changes</ButtonComponent>
      </div>
    `
  })
}
