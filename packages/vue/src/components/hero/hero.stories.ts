import HeroComponent from '@/components/hero/hero.vue'
import HeroSectionComponent from '@/components/hero/hero-section.vue'
import HeroTaglineComponent from '@/components/hero/hero-tagline.vue'
import HeroTitleComponent from '@/components/hero/hero-title.vue'
import HeroBodyComponent from '@/components/hero/hero-body.vue'
import HeroActionsComponent from '@/components/hero/hero-actions.vue'
import ButtonComponent from '@/components/button/button.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Layout/Hero',
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eum
              tempora delectus et. Iusto tempora accusantium suscipit labore, iure
              exercitationem autem quasi odit aut temporibus rem expedita maxime at.
              Laudantium?
            </HeroBodyComponent>
            <HeroActionsComponent>
              <ButtonComponent>Button</ButtonComponent>
              <ButtonComponent variant="outline">Button</ButtonComponent>
            </HeroActionsComponent>
          </div>
        </HeroSectionComponent>
        <HeroSectionComponent style="order: 1;">
          <img
            src="https://dummyimage.com/1000x1000/d4d4d4/171717"
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
