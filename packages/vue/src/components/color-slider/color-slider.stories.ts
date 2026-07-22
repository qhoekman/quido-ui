import ColorSliderComponent from '@/components/color-slider/color-slider.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Data Entry/Color Slider',
  component: ColorSliderComponent,
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 }
    },
    mode: {
      control: {
        type: 'select'
      },
      options: ['hue', 'saturation', 'lightness', 'alpha']
    },
    hue: {
      control: { type: 'range', min: 0, max: 360, step: 1 }
    },
    saturation: {
      control: { type: 'range', min: 0, max: 100, step: 1 }
    },
    lightness: {
      control: { type: 'range', min: 0, max: 100, step: 1 }
    },
    min: {
      control: { type: 'number' }
    },
    max: {
      control: { type: 'number' }
    },
    step: {
      control: { type: 'number' }
    }
  },
  args: {
    mode: 'hue',
    hue: 0,
    saturation: 100,
    lightness: 50,
    value: 50,
    min: 0,
    max: 100,
    step: 1
  },
  render: (args) => ({
    components: { ColorSliderComponent },
    setup() {
      return { args }
    },
    template: '<ColorSliderComponent v-bind="args" @valueChange="args.value = $event" />'
  })
} satisfies Meta<typeof ColorSliderComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: () => ({
    components: { ColorSliderComponent },
    template: `
      <div style="max-width: 280px; padding: var(--spacing-6); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
        <h3 style="margin: 0 0 var(--spacing-1);">Accent Color</h3>
        <p style="margin: 0 0 var(--spacing-4); color: var(--color-muted-fg);">Drag to adjust the hue used across your workspace.</p>
        <ColorSliderComponent mode="hue" :hue="210" :saturation="100" :lightness="50" />
      </div>
    `
  })
}
