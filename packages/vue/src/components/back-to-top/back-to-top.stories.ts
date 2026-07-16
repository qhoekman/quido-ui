import BackToTopComponent from '@/components/back-to-top/back-to-top.vue'
import ButtonComponent from '@/components/button/button.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Actions/Back to Top',
  component: BackToTopComponent,
  argTypes: {
    asChild: {
      control: 'boolean',
      description: 'When true, merges props and event handlers with the child element'
    },
    as: {
      control: 'text',
      description: 'The HTML element to render'
    }
  },
  args: {
    asChild: false,
    as: 'div'
  },
  render: (args) => ({
    components: {
      BackToTopComponent,
      ButtonComponent
    },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 200vh; position: relative;">
        <BackToTopComponent v-bind="args">
          <ButtonComponent variant="primary" size="md">Back to Top</ButtonComponent>
        </BackToTopComponent>
      </div>
    `
  })
} satisfies Meta<typeof BackToTopComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
