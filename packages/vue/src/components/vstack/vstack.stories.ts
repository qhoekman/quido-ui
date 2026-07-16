import VStackComponent from '@/components/vstack/vstack.vue'
import CardComponent from '@/components/card/card.vue'
import CardHeaderComponent from '@/components/card/card-header.vue'
import CardTitleComponent from '@/components/card/card-title.vue'
import CardContentComponent from '@/components/card/card-content.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Layout/VStack',
  component: VStackComponent,
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
      VStackComponent,
      CardComponent,
      CardHeaderComponent,
      CardTitleComponent,
      CardContentComponent
    },
    setup() {
      return { args }
    },
    template: `
      <VStackComponent v-bind="args">
        <CardComponent
          v-for="index in 5"
          :key="index"
        >
          <CardHeaderComponent>
            <CardTitleComponent>Card {{ index }}</CardTitleComponent>
          </CardHeaderComponent>
          <CardContentComponent>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          </CardContentComponent>
        </CardComponent>
      </VStackComponent>
    `
  })
} satisfies Meta<typeof VStackComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
