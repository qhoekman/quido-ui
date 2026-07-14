import SpotlightGalleryComponent from './spotlight-gallery.vue'
import SpotlightGalleryItemComponent from './spotlight-gallery-item.vue'
import SpotlightGalleryImageComponent from './spotlight-gallery-image.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Data Display/Spotlight Gallery',
  component: SpotlightGalleryComponent,
  argTypes: {
    defaultActiveIndex: {
      control: 'number'
    },
    activeIndex: {
      control: 'number'
    }
  },
  args: {
    defaultActiveIndex: 0
  },
  render: (args) => ({
    components: {
      SpotlightGalleryComponent,
      SpotlightGalleryItemComponent,
      SpotlightGalleryImageComponent
    },
    setup() {
      return { args }
    },
    template: `
      <div style="width: 300px;">
        <SpotlightGalleryComponent
          :default-active-index="args.defaultActiveIndex"
          :active-index="args.activeIndex"
        >
          <SpotlightGalleryItemComponent>
            <SpotlightGalleryImageComponent src="https://placehold.co/150x150" alt="Image 1" />
          </SpotlightGalleryItemComponent>
          <SpotlightGalleryItemComponent>
            <SpotlightGalleryImageComponent src="https://placehold.co/151x151" alt="Image 2" />
          </SpotlightGalleryItemComponent>
          <SpotlightGalleryItemComponent>
            <SpotlightGalleryImageComponent src="https://placehold.co/152x152" alt="Image 3" />
          </SpotlightGalleryItemComponent>
        </SpotlightGalleryComponent>
      </div>
    `
  })
} satisfies Meta<typeof SpotlightGalleryComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
