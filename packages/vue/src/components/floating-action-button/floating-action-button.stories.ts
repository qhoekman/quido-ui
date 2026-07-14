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
