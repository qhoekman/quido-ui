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
            <SpotlightGalleryImageComponent src="https://placehold.co/300x300/1e293b/ffffff?text=Front" alt="Product photo — front view" />
          </SpotlightGalleryItemComponent>
          <SpotlightGalleryItemComponent>
            <SpotlightGalleryImageComponent src="https://placehold.co/300x300/334155/ffffff?text=Side" alt="Product photo — side view" />
          </SpotlightGalleryItemComponent>
          <SpotlightGalleryItemComponent>
            <SpotlightGalleryImageComponent src="https://placehold.co/300x300/475569/ffffff?text=Detail" alt="Product photo — detail shot" />
          </SpotlightGalleryItemComponent>
        </SpotlightGalleryComponent>
      </div>
    `
  })
} satisfies Meta<typeof SpotlightGalleryComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: () => ({
    components: {
      SpotlightGalleryComponent,
      SpotlightGalleryItemComponent,
      SpotlightGalleryImageComponent
    },
    template: `
      <div style="max-width: 320px; padding: var(--spacing-6); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
        <h3 style="margin: 0 0 var(--spacing-1);">Listing Photos</h3>
        <p style="margin: 0 0 var(--spacing-4); color: var(--color-muted-fg);">Click a thumbnail to view it in full size.</p>
        <SpotlightGalleryComponent :default-active-index="0">
          <SpotlightGalleryItemComponent>
            <SpotlightGalleryImageComponent src="https://placehold.co/300x300/0f766e/ffffff?text=Living+Room" alt="Living room" />
          </SpotlightGalleryItemComponent>
          <SpotlightGalleryItemComponent>
            <SpotlightGalleryImageComponent src="https://placehold.co/300x300/115e59/ffffff?text=Kitchen" alt="Kitchen" />
          </SpotlightGalleryItemComponent>
          <SpotlightGalleryItemComponent>
            <SpotlightGalleryImageComponent src="https://placehold.co/300x300/134e4a/ffffff?text=Bedroom" alt="Bedroom" />
          </SpotlightGalleryItemComponent>
        </SpotlightGalleryComponent>
      </div>
    `
  })
}
