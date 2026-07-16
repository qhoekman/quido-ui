import ReelComponent from '@/components/reel/reel.vue'
import ReelContentComponent from '@/components/reel/reel-content.vue'
import ReelItemComponent from '@/components/reel/reel-item.vue'
import ReelButtonComponent from '@/components/reel/reel-button.vue'
import CardComponent from '@/components/card/card.vue'
import CardContentComponent from '@/components/card/card-content.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'

const meta = {
  title: 'Features/Ecommerce/Components/Reel',
  component: ReelComponent,
  argTypes: {},
  args: {},
  render: (args) => ({
    components: {
      ReelComponent,
      ReelContentComponent,
      ReelItemComponent,
      ReelButtonComponent,
      CardComponent,
      CardContentComponent
    },
    setup() {
      const items = ref(Array.from({ length: 10 }, (_, i) => i + 1))
      return { args, items }
    },
    template: `
      <ReelComponent
        v-bind="args"
        style="width: 300px; height: 200px;"
      >
        <ReelButtonComponent direction="prev" />
        <ReelContentComponent>
          <ReelItemComponent
            v-for="item in items"
            :key="item"
          >
            <CardComponent style="margin: 0.25rem; height: 100%;">
              <CardContentComponent style="padding: 1.5rem;">
                <span style="font-size: 1.5rem; font-weight: 600;">{{ item }}</span>
              </CardContentComponent>
            </CardComponent>
          </ReelItemComponent>
        </ReelContentComponent>
        <ReelButtonComponent direction="next" />
      </ReelComponent>
    `
  })
} satisfies Meta<typeof ReelComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
