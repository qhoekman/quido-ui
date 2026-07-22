import CarouselComponent from '@/components/carousel/carousel.vue'
import CarouselContentComponent from '@/components/carousel/carousel-content.vue'
import CarouselItemComponent from '@/components/carousel/carousel-item.vue'
import CarouselButtonComponent from '@/components/carousel/carousel-button.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', // nature
  'https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=800&q=80', // city
  'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80', // architecture
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80', // landscape
  'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=800&q=80' // water
]

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
      CarouselButtonComponent
    },
    setup() {
      return { args, images }
    },
    template: `
      <CarouselComponent
        :orientation="args.orientation"
        :autoplay="args.autoplay"
        :autoplay-interval="args.autoplayInterval"
        style="width: 100%; max-width: 600px;"
      >
        <CarouselContentComponent>
          <CarouselItemComponent v-for="(image, index) in images" :key="image" style="flex-basis: 33.333333%;">
            <img
              :src="image"
              :alt="'Image ' + (index + 1)"
              style="width: 100%; height: 100%; object-fit: cover; aspect-ratio: 16/9;"
            />
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

const destinations = [
  { src: images[0], label: 'Banff, Canada' },
  { src: images[1], label: 'Tokyo, Japan' },
  { src: images[2], label: 'Barcelona, Spain' },
  { src: images[3], label: 'Reykjavik, Iceland' },
  { src: images[4], label: 'Lake Como, Italy' }
]

export const Composition: Story = {
  render: () => ({
    components: {
      CarouselComponent,
      CarouselContentComponent,
      CarouselItemComponent,
      CarouselButtonComponent
    },
    setup() {
      return { destinations }
    },
    template: `
      <CarouselComponent style="width: 100%; max-width: 40rem;">
        <CarouselContentComponent>
          <CarouselItemComponent v-for="destination in destinations" :key="destination.label">
            <div style="position: relative;">
              <img
                :src="destination.src"
                :alt="destination.label"
                style="width: 100%; height: 100%; object-fit: cover; aspect-ratio: 16/9; border-radius: var(--border-radius-lg);"
              />
              <span
                style="position: absolute; bottom: var(--spacing-3); left: var(--spacing-3); padding: var(--spacing-1) var(--spacing-3); border-radius: var(--border-radius-md); background-color: hsl(from var(--color-black) h s l / 60%); color: var(--color-white); font-size: var(--font-size-sm);"
              >
                {{ destination.label }}
              </span>
            </div>
          </CarouselItemComponent>
        </CarouselContentComponent>
        <CarouselButtonComponent position="prev" size="icon" />
        <CarouselButtonComponent position="next" size="icon" />
      </CarouselComponent>
    `
  })
}
