import HeroComponent from '@/components/hero/hero.vue'
import HeroSectionComponent from '@/components/hero/hero-section.vue'
import HeroTaglineComponent from '@/components/hero/hero-tagline.vue'
import HeroTitleComponent from '@/components/hero/hero-title.vue'
import HeroBodyComponent from '@/components/hero/hero-body.vue'
import HeroActionsComponent from '@/components/hero/hero-actions.vue'
import HeroBackdropComponent from '@/components/hero/hero-backdrop.vue'
import HeroBackdropImageComponent from '@/components/hero/hero-backdrop-image.vue'
import HeroCoverImageComponent from '@/components/hero/hero-cover-image.vue'
import HeroDiagonalShapeComponent from '@/components/hero/hero-diagonal-shape.vue'
import ButtonComponent from '@/components/button/button.vue'
import CarouselComponent from '@/components/carousel/carousel.vue'
import CarouselContentComponent from '@/components/carousel/carousel-content.vue'
import CarouselItemComponent from '@/components/carousel/carousel-item.vue'
import CarouselButtonComponent from '@/components/carousel/carousel-button.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Features/Website/Components/Hero',
  component: HeroComponent,
  render: () => ({
    components: {
      HeroComponent,
      HeroSectionComponent,
      HeroTaglineComponent,
      HeroTitleComponent,
      HeroBodyComponent,
      HeroActionsComponent,
      ButtonComponent
    },
    template: `
      <HeroComponent>
        <HeroSectionComponent style="max-width: 30rem;">
          <div style="display: flex; flex-direction: column; gap: var(--spacing-4);">
            <HeroTaglineComponent>Tagline</HeroTaglineComponent>
            <HeroTitleComponent>Medium length hero section title goes in here</HeroTitleComponent>
            <HeroBodyComponent>
              Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
            </HeroBodyComponent>
            <HeroActionsComponent>
              <ButtonComponent>Get started</ButtonComponent>
              <ButtonComponent variant="outline">Learn more</ButtonComponent>
            </HeroActionsComponent>
          </div>
        </HeroSectionComponent>
        <HeroSectionComponent style="order: 1;">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1000&h=1000&q=80"
            alt="Image"
            width="1000"
            height="1000"
            style="border-radius: var(--border-radius-xl);"
          />
        </HeroSectionComponent>
      </HeroComponent>
    `
  })
} satisfies Meta<typeof HeroComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: () => ({
    components: {
      HeroComponent,
      HeroSectionComponent,
      HeroTaglineComponent,
      HeroTitleComponent,
      HeroBodyComponent,
      HeroActionsComponent,
      HeroBackdropComponent,
      HeroBackdropImageComponent,
      ButtonComponent
    },
    template: `
      <HeroBackdropComponent>
        <HeroBackdropImageComponent src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80" alt="hero image" />
        <HeroComponent style="width: 100%; display: flex; padding: var(--spacing-4) var(--spacing-6) var(--spacing-12) var(--spacing-6);">
          <HeroSectionComponent style="max-width: var(--columns-3xl); margin-left: auto; margin-right: auto;">
            <div style="display: flex; flex-direction: column; gap: var(--spacing-4); align-items: center; text-align: center;">
              <HeroTaglineComponent style="color: var(--color-muted-fg);">Now in public beta</HeroTaglineComponent>
              <HeroTitleComponent style="color: var(--color-white);">Introducing Pulse Analytics</HeroTitleComponent>
              <HeroBodyComponent style="color: var(--color-muted-fg);">
                Real-time insights for your team, wherever you work. Track performance, spot trends, and ship with confidence.
              </HeroBodyComponent>
              <HeroActionsComponent>
                <ButtonComponent>Start free trial</ButtonComponent>
                <ButtonComponent variant="outline" style="color: var(--color-white);">View pricing</ButtonComponent>
              </HeroActionsComponent>
            </div>
          </HeroSectionComponent>
        </HeroComponent>
      </HeroBackdropComponent>
    `
  })
}

export const WithContentLeft: Story = {
  render: () => ({
    components: {
      HeroComponent,
      HeroSectionComponent,
      HeroTaglineComponent,
      HeroTitleComponent,
      HeroBodyComponent,
      HeroActionsComponent,
      ButtonComponent
    },
    template: `
      <HeroComponent>
        <HeroSectionComponent style="max-width: 30rem;">
          <div style="display: flex; flex-direction: column; gap: var(--spacing-4);">
            <HeroTaglineComponent>Tagline</HeroTaglineComponent>
            <HeroTitleComponent>Medium length hero section title goes in here</HeroTitleComponent>
            <HeroBodyComponent>
              Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
            </HeroBodyComponent>
            <HeroActionsComponent>
              <ButtonComponent>Get started</ButtonComponent>
              <ButtonComponent variant="outline">Learn more</ButtonComponent>
            </HeroActionsComponent>
          </div>
        </HeroSectionComponent>
        <HeroSectionComponent style="order: 1;">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1000&h=1000&q=80"
            alt="Image"
            width="1000"
            height="1000"
            style="border-radius: var(--border-radius-xl);"
          />
        </HeroSectionComponent>
      </HeroComponent>
    `
  })
}

export const WithContentCenter: Story = {
  render: () => ({
    components: {
      HeroComponent,
      HeroSectionComponent,
      HeroTaglineComponent,
      HeroTitleComponent,
      HeroBodyComponent,
      HeroActionsComponent,
      ButtonComponent
    },
    template: `
      <HeroComponent style="width: 100%; display: flex; padding-top: var(--spacing-12); padding-bottom: var(--spacing-12);">
        <HeroSectionComponent style="max-width: var(--columns-3xl); margin-left: auto; margin-right: auto;">
          <div style="display: flex; flex-direction: column; gap: var(--spacing-4); align-items: center; text-align: center;">
            <HeroTaglineComponent>Tagline</HeroTaglineComponent>
            <HeroTitleComponent>Medium length hero section title goes in here</HeroTitleComponent>
            <HeroBodyComponent>
              Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
            </HeroBodyComponent>
            <HeroActionsComponent>
              <ButtonComponent>Get started</ButtonComponent>
              <ButtonComponent variant="outline">Learn more</ButtonComponent>
            </HeroActionsComponent>
          </div>
        </HeroSectionComponent>
      </HeroComponent>
    `
  })
}

export const WithContentVertical: Story = {
  render: () => ({
    components: {
      HeroComponent,
      HeroSectionComponent,
      HeroTaglineComponent,
      HeroTitleComponent,
      HeroBodyComponent,
      HeroActionsComponent,
      ButtonComponent
    },
    template: `
      <HeroComponent style="display: block;">
        <HeroSectionComponent style="max-width: var(--columns-5xl);">
          <div style="display: flex; flex-direction: column; gap: var(--spacing-4); align-items: center; text-align: center;">
            <HeroTaglineComponent>Tagline</HeroTaglineComponent>
            <HeroTitleComponent>Medium length hero section title goes in here</HeroTitleComponent>
            <HeroBodyComponent>
              Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
            </HeroBodyComponent>
            <HeroActionsComponent>
              <ButtonComponent>Get started</ButtonComponent>
              <ButtonComponent variant="outline">Learn more</ButtonComponent>
            </HeroActionsComponent>
          </div>
        </HeroSectionComponent>
        <HeroSectionComponent style="margin-left: auto; margin-right: auto; margin-top: var(--spacing-18); max-width: var(--columns-7xl);">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&h=1200&q=80"
            alt="Image"
            width="1920"
            height="1200"
            style="border-radius: var(--border-radius-xl); object-fit: cover;"
          />
        </HeroSectionComponent>
      </HeroComponent>
    `
  })
}

export const WithBackdrop: Story = {
  render: () => ({
    components: {
      HeroComponent,
      HeroSectionComponent,
      HeroTaglineComponent,
      HeroTitleComponent,
      HeroBodyComponent,
      HeroActionsComponent,
      HeroBackdropComponent,
      HeroBackdropImageComponent,
      ButtonComponent
    },
    template: `
      <HeroBackdropComponent>
        <HeroBackdropImageComponent src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80" alt="hero image" />
        <HeroComponent style="width: 100%; display: flex; padding: var(--spacing-4) var(--spacing-6) var(--spacing-12) var(--spacing-6);">
          <HeroSectionComponent style="max-width: var(--columns-3xl); margin-left: auto; margin-right: auto;">
            <div style="display: flex; flex-direction: column; gap: var(--spacing-4); align-items: center; text-align: center;">
              <HeroTaglineComponent style="color: var(--color-white);">Tagline</HeroTaglineComponent>
              <HeroTitleComponent style="color: var(--color-white);">Medium length hero section title goes in here</HeroTitleComponent>
              <HeroBodyComponent style="color: var(--color-muted-fg);">
                Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
              </HeroBodyComponent>
              <HeroActionsComponent>
                <ButtonComponent>Get started</ButtonComponent>
                <ButtonComponent variant="outline" style="color: var(--color-white);">Learn more</ButtonComponent>
              </HeroActionsComponent>
            </div>
          </HeroSectionComponent>
        </HeroComponent>
      </HeroBackdropComponent>
    `
  })
}

export const WithBackdropIllustration: Story = {
  render: () => ({
    components: {
      HeroComponent,
      HeroSectionComponent,
      HeroTaglineComponent,
      HeroTitleComponent,
      HeroBodyComponent,
      HeroActionsComponent,
      HeroBackdropComponent,
      HeroDiagonalShapeComponent,
      ButtonComponent
    },
    template: `
      <HeroBackdropComponent>
        <div style="margin-left: auto; margin-right: auto; max-width: var(--columns-7xl); padding-left: var(--spacing-8); padding-right: var(--spacing-8);">
          <HeroComponent>
            <HeroSectionComponent style="max-width: var(--columns-3xl); margin-top: var(--spacing-20);">
              <div style="display: flex; flex-direction: column; gap: var(--spacing-4);">
                <HeroTaglineComponent>Tagline</HeroTaglineComponent>
                <HeroTitleComponent>Medium length hero section title goes in here</HeroTitleComponent>
                <HeroBodyComponent>
                  Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
                </HeroBodyComponent>
                <HeroActionsComponent>
                  <ButtonComponent>Get started</ButtonComponent>
                  <ButtonComponent variant="outline">Learn more</ButtonComponent>
                </HeroActionsComponent>
              </div>
            </HeroSectionComponent>
            <HeroSectionComponent style="position: relative; background-color: var(--color-muted); display: flex; align-items: center; justify-content: center; height: 400px;">
              <HeroDiagonalShapeComponent />
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&h=1800&q=80"
                alt="Image"
                style="aspect-ratio: 2/3; height: 100%; max-height: 600px; width: auto; object-fit: cover;"
              />
            </HeroSectionComponent>
          </HeroComponent>
        </div>
      </HeroBackdropComponent>
    `
  })
}

export const WithCarousel: Story = {
  render: () => ({
    components: {
      HeroComponent,
      HeroSectionComponent,
      HeroTaglineComponent,
      HeroTitleComponent,
      HeroBodyComponent,
      HeroActionsComponent,
      ButtonComponent,
      CarouselComponent,
      CarouselContentComponent,
      CarouselItemComponent,
      CarouselButtonComponent
    },
    template: `
      <HeroComponent>
        <HeroSectionComponent style="max-width: var(--columns-3xl);">
          <div style="display: flex; flex-direction: column; gap: var(--spacing-4);">
            <HeroTaglineComponent>Tagline</HeroTaglineComponent>
            <HeroTitleComponent>Medium length hero section title goes in here</HeroTitleComponent>
            <HeroBodyComponent>
              Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
            </HeroBodyComponent>
            <HeroActionsComponent>
              <ButtonComponent>Get started</ButtonComponent>
              <ButtonComponent variant="outline">Learn more</ButtonComponent>
            </HeroActionsComponent>
          </div>
        </HeroSectionComponent>
        <HeroSectionComponent style="order: 9999;">
          <CarouselComponent style="width: 100%;">
            <CarouselContentComponent>
              <CarouselItemComponent v-for="i in 5" :key="i">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1500&h=1000&q=80"
                  alt="Image"
                  style="border-radius: var(--border-radius-xl); width: 100%;"
                />
              </CarouselItemComponent>
            </CarouselContentComponent>
            <CarouselButtonComponent position="prev" size="icon" style="margin-left: var(--spacing-16); border: none; color: var(--color-primary);" />
            <CarouselButtonComponent position="next" size="icon" style="margin-right: var(--spacing-16); border: none; color: var(--color-primary);" />
          </CarouselComponent>
        </HeroSectionComponent>
      </HeroComponent>
    `
  })
}

export const WithImages: Story = {
  render: () => ({
    components: {
      HeroComponent,
      HeroSectionComponent,
      HeroTaglineComponent,
      HeroTitleComponent,
      HeroBodyComponent,
      HeroActionsComponent,
      ButtonComponent
    },
    template: `
      <HeroComponent>
        <HeroSectionComponent style="max-width: 30rem;">
          <div style="display: flex; flex-direction: column; gap: var(--spacing-4);">
            <HeroTaglineComponent>Tagline</HeroTaglineComponent>
            <HeroTitleComponent>Medium length hero section title goes in here</HeroTitleComponent>
            <HeroBodyComponent>
              Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
            </HeroBodyComponent>
            <HeroActionsComponent>
              <ButtonComponent>Get started</ButtonComponent>
              <ButtonComponent variant="outline">Learn more</ButtonComponent>
            </HeroActionsComponent>
          </div>
        </HeroSectionComponent>
        <HeroSectionComponent style="background-color: var(--color-muted); max-height: 800px; overflow: hidden;">
          <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr));">
            <div style="margin-left: auto; margin-right: var(--spacing-4); display: flex; flex-direction: column; gap: var(--spacing-4);">
              <img v-for="i in 3" :key="i" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=250&h=300&q=80" alt="Image" style="object-fit: cover;" aria-hidden="true" />
            </div>
            <div style="margin-top: var(--spacing-6); display: flex; flex-direction: column; gap: var(--spacing-4);">
              <img v-for="i in 3" :key="i" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=250&h=300&q=80" alt="Image" style="object-fit: cover;" aria-hidden="true" />
            </div>
          </div>
        </HeroSectionComponent>
      </HeroComponent>
    `
  })
}

export const WithVideo: Story = {
  render: () => ({
    components: {
      HeroComponent,
      HeroSectionComponent,
      HeroTaglineComponent,
      HeroTitleComponent,
      HeroBodyComponent,
      HeroActionsComponent,
      ButtonComponent
    },
    template: `
      <HeroComponent>
        <HeroSectionComponent style="max-width: var(--columns-3xl);">
          <div style="display: flex; flex-direction: column; gap: var(--spacing-4);">
            <HeroTaglineComponent>Tagline</HeroTaglineComponent>
            <HeroTitleComponent>Medium length hero section title goes in here</HeroTitleComponent>
            <HeroBodyComponent>
              Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
            </HeroBodyComponent>
            <HeroActionsComponent>
              <ButtonComponent>Get started</ButtonComponent>
              <ButtonComponent variant="outline">Learn more</ButtonComponent>
            </HeroActionsComponent>
          </div>
        </HeroSectionComponent>
        <HeroSectionComponent style="position: relative; width: 100%; background-color: var(--color-muted); padding-top: 56.25%;">
          <iframe
            src="https://www.youtube.com/embed/LXb3EKWsInQ"
            title="Product demo video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style="position: absolute; left: 0; top: 0; height: 100%; width: 100%; border: none;"
          ></iframe>
        </HeroSectionComponent>
      </HeroComponent>
    `
  })
}

export const WithDiagonalShape: Story = {
  render: () => ({
    components: {
      HeroComponent,
      HeroSectionComponent,
      HeroTaglineComponent,
      HeroTitleComponent,
      HeroBodyComponent,
      HeroActionsComponent,
      HeroBackdropComponent,
      HeroDiagonalShapeComponent,
      ButtonComponent
    },
    template: `
      <HeroBackdropComponent>
        <HeroComponent style="gap: var(--spacing-14);">
          <HeroSectionComponent style="max-width: var(--columns-3xl); margin-top: var(--spacing-40); margin-bottom: var(--spacing-40);">
            <div style="display: flex; flex-direction: column; gap: var(--spacing-4);">
              <HeroTaglineComponent>Tagline</HeroTaglineComponent>
              <HeroTitleComponent>Medium length hero section title goes in here</HeroTitleComponent>
              <HeroBodyComponent>
                Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
              </HeroBodyComponent>
              <HeroActionsComponent>
                <ButtonComponent>Get started</ButtonComponent>
                <ButtonComponent variant="outline">Learn more</ButtonComponent>
              </HeroActionsComponent>
            </div>
          </HeroSectionComponent>
          <HeroSectionComponent style="position: relative; background-color: var(--color-muted); width: 50%;">
            <HeroDiagonalShapeComponent />
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1000&h=1000&q=80"
              alt="Image"
              style="height: 100%; width: 100%; object-fit: cover;"
            />
          </HeroSectionComponent>
        </HeroComponent>
      </HeroBackdropComponent>
    `
  })
}

export const WithCover: Story = {
  render: () => ({
    components: {
      HeroComponent,
      HeroSectionComponent,
      HeroTaglineComponent,
      HeroTitleComponent,
      HeroBodyComponent,
      HeroActionsComponent,
      HeroBackdropComponent,
      HeroCoverImageComponent,
      ButtonComponent
    },
    template: `
      <HeroBackdropComponent>
        <HeroCoverImageComponent src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&h=1200&q=80" alt="hero image" />
        <div style="margin-left: auto; margin-right: auto; margin-top: var(--spacing-14); max-width: var(--columns-7xl); padding-left: var(--spacing-4); padding-right: var(--spacing-4); padding-bottom: var(--spacing-20);">
          <HeroComponent>
            <HeroSectionComponent style="max-width: var(--columns-3xl);">
              <div style="display: flex; flex-direction: column; gap: var(--spacing-4);">
                <HeroTaglineComponent>Tagline</HeroTaglineComponent>
                <HeroTitleComponent>Medium length hero section title goes in here</HeroTitleComponent>
              </div>
            </HeroSectionComponent>
            <HeroSectionComponent>
              <div style="display: flex; flex-direction: column; gap: var(--spacing-4);">
                <HeroBodyComponent>
                  Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
                </HeroBodyComponent>
                <HeroActionsComponent>
                  <ButtonComponent>Get started</ButtonComponent>
                  <ButtonComponent variant="outline">Learn more</ButtonComponent>
                </HeroActionsComponent>
              </div>
            </HeroSectionComponent>
          </HeroComponent>
        </div>
      </HeroBackdropComponent>
    `
  }),
  parameters: {
    layout: 'fullscreen'
  }
}
