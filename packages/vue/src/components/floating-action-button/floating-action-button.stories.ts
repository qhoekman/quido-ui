import FloatingActionButtonComponent from '@/components/floating-action-button/floating-action-button.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Plus } from 'lucide-vue-next'

const meta = {
  title: 'Components/Actions/Floating Action Button',
  component: FloatingActionButtonComponent,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    disabled: {
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
    size: 'md',
    disabled: false,
    asChild: false,
    as: 'button'
  },
  render: (args) => ({
    components: { FloatingActionButtonComponent, Plus },
    setup() {
      return { args }
    },
    template: `
      <div style="position: relative; height: 400px; width: 100%;">
        <FloatingActionButtonComponent v-bind="args">
          <Plus :size="24" />
        </FloatingActionButtonComponent>
      </div>
    `
  })
} satisfies Meta<typeof FloatingActionButtonComponent>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: (args) => ({
    components: { FloatingActionButtonComponent, Plus },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 400px; width: 100%; background-color: var(--color-neutral-50); border-radius: var(--border-radius-md); padding: var(--spacing-6);">
        <h2 style="margin-top: 0;">Contacts</h2>
        <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: var(--spacing-2);">
          <li>Ava Thompson</li>
          <li>Marcus Lee</li>
          <li>Priya Nair</li>
        </ul>
        <FloatingActionButtonComponent v-bind="args">
          <Plus :size="24" />
        </FloatingActionButtonComponent>
      </div>
    `
  })
}
