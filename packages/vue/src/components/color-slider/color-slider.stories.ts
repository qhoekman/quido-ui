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
