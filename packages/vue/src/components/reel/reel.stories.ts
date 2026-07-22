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
      const images = [
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=160&h=160&fit=crop',
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=160&h=160&fit=crop',
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=160&h=160&fit=crop',
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=160&h=160&fit=crop',
        'https://images.unsplash.com/photo-1560343090-f0409e92787a?w=160&h=160&fit=crop',
        'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=160&h=160&fit=crop',
        'https://images.unsplash.com/photo-1503602642458-232111445657?w=160&h=160&fit=crop',
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=160&h=160&fit=crop',
        'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=160&h=160&fit=crop',
        'https://images.unsplash.com/photo-1515955656352-a1da3d7d4b90?w=160&h=160&fit=crop'
      ]
      const items = ref(Array.from({ length: 10 }, (_, i) => i))
      return { args, items, images }
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
            <CardComponent style="margin: 0.25rem; height: 100%; overflow: hidden;">
              <img :src="images[item % images.length]" :alt="'Product ' + (item + 1)" style="width: 100%; height: 100%; object-fit: cover;" />
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

export const Composition: Story = {
  render: () => ({
    components: {
      ReelComponent,
      ReelContentComponent,
      ReelItemComponent,
      ReelButtonComponent
    },
    setup() {
      const images = [
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=160&h=160&fit=crop',
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=160&h=160&fit=crop',
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=160&h=160&fit=crop',
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=160&h=160&fit=crop',
        'https://images.unsplash.com/photo-1560343090-f0409e92787a?w=160&h=160&fit=crop'
      ]
      const products = [
        { name: 'Canvas Tote', price: '$24.00' },
        { name: 'Wool Scarf', price: '$38.00' },
        { name: 'Leather Wallet', price: '$52.00' },
        { name: 'Ceramic Mug', price: '$16.00' },
        { name: 'Wireless Earbuds', price: '$89.00' }
      ]
      return { images, products }
    },
    template: `
      <div style="max-width: var(--spacing-5xl); width: 100%;">
        <h4 style="margin: 0 0 var(--spacing-2);">Recently viewed</h4>
        <ReelComponent style="width: 300px; height: 220px;">
          <ReelButtonComponent direction="prev" />
          <ReelContentComponent>
            <ReelItemComponent
              v-for="(product, index) in products"
              :key="product.name"
            >
              <img :src="images[index % images.length]" :alt="product.name" style="width: 100%; height: 120px; object-fit: cover; border-radius: var(--border-radius-md);" />
              <p style="margin: var(--spacing-1) 0 0; font-size: var(--font-size-sm);">{{ product.name }}</p>
              <p style="margin: 0; color: var(--color-muted-fg); font-size: var(--font-size-sm);">{{ product.price }}</p>
            </ReelItemComponent>
          </ReelContentComponent>
          <ReelButtonComponent direction="next" />
        </ReelComponent>
      </div>
    `
  })
}
