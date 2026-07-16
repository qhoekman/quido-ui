import HStackComponent from '@/components/hstack/hstack.vue'
import CardComponent from '@/components/card/card.vue'
import CardHeaderComponent from '@/components/card/card-header.vue'
import CardTitleComponent from '@/components/card/card-title.vue'
import CardContentComponent from '@/components/card/card-content.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Layout/HStack',
  component: HStackComponent,
  argTypes: {
    gap: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', '2xl']
    }
  },
  args: {
    gap: 'md'
  },
  render: (args) => ({
    components: {
      HStackComponent,
      CardComponent,
      CardHeaderComponent,
      CardTitleComponent,
      CardContentComponent
    },
    setup() {
      return { args }
    },
    template: `
      <HStackComponent v-bind="args">
        <CardComponent
          v-for="index in 5"
          :key="index"
          style="width: 200px;"
        >
          <CardHeaderComponent>
            <CardTitleComponent>Card {{ index }}</CardTitleComponent>
          </CardHeaderComponent>
          <CardContentComponent>
            <p>...</p>
          </CardContentComponent>
        </CardComponent>
      </HStackComponent>
    `
  })
} satisfies Meta<typeof HStackComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
