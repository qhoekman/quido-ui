import CarouselComponent from '@/components/carousel/carousel.vue'
import CarouselContentComponent from '@/components/carousel/carousel-content.vue'
import CarouselItemComponent from '@/components/carousel/carousel-item.vue'
import CarouselButtonComponent from '@/components/carousel/carousel-button.vue'
import CardComponent from '@/components/card/card.vue'
import CardContentComponent from '@/components/card/card-content.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Features/Website/Components/Carousel',
  component: CarouselComponent,
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical']
    },
    autoplay: {
      control: 'boolean'
    },
    autoplayInterval: {
      control: 'number'
    }
  },
  args: {
    orientation: 'horizontal',
    autoplay: false,
    autoplayInterval: 3000
  },
  render: (args) => ({
    components: {
      CarouselComponent,
      CarouselContentComponent,
      CarouselItemComponent,
      CarouselButtonComponent,
      CardComponent,
      CardContentComponent
    },
    setup() {
      return { args }
    },
    template: `
      <CarouselComponent
        :orientation="args.orientation"
        :autoplay="args.autoplay"
        :autoplay-interval="args.autoplayInterval"
        style="width: 100%; max-width: 600px; height: 300px;"
      >
        <CarouselContentComponent>
          <CarouselItemComponent v-for="item in [0, 1, 2, 3, 4]" :key="item">
            <CardComponent>
              <CardContentComponent
                style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; min-height: 300px;"
              >
                <span
                  style="font-size: var(--font-size-4xl); font-weight: var(--font-weight-bold);"
                >
                  {{ item + 1 }}
                </span>
              </CardContentComponent>
            </CardComponent>
          </CarouselItemComponent>
        </CarouselContentComponent>
        <CarouselButtonComponent position="prev" size="icon" />
        <CarouselButtonComponent position="next" size="icon" />
      </CarouselComponent>
    `
  })
} satisfies Meta<typeof CarouselComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Vertical: Story = {
  args: {
    orientation: 'vertical'
  }
}

export const Autoplay: Story = {
  args: {
    autoplay: true,
    autoplayInterval: 2000
  }
}
