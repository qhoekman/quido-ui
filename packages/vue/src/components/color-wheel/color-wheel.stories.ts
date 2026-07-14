import ColorWheelComponent from '@/components/color-wheel/color-wheel.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'

const meta = {
  title: 'Components/Data Entry/Color Wheel',
  component: ColorWheelComponent,
  argTypes: {
    hue: {
      control: { type: 'range', min: 0, max: 360, step: 1 },
      description: 'The hue value (0-360)'
    },
    saturation: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'The saturation value (0-100)'
    },
    lightness: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'The lightness value (0-100)'
    }
  },
  args: {
    hue: 0,
    saturation: 100,
    lightness: 50
  },
  render: (args) => ({
    components: {
      ColorWheelComponent
    },
    setup() {
      const selectedColor = ref(
        `hsl(${args.hue}, ${args.saturation}%, ${args.lightness}%)`
      )

      const handleValueChange = (value: string) => {
        selectedColor.value = value
      }

      return {
        args,
        selectedColor,
        handleValueChange
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-4); align-items: flex-start;">
        <ColorWheelComponent
          :hue="args.hue"
          :saturation="args.saturation"
          :lightness="args.lightness"
          @value-change="handleValueChange"
        />
        <div
          style="padding: var(--spacing-4); border-radius: var(--border-radius-md); border: var(--border-width-default) solid var(--color-border); font-size: var(--font-size-sm); font-family: var(--font-family-mono); display: flex; flex-direction: column; gap: var(--spacing-2);"
        >
          <div>Selected: {{ selectedColor }}</div>
          <div
            :style="{ width: '100px', height: '40px', backgroundColor: selectedColor, border: '1px solid var(--color-border)', borderRadius: 'var(--border-radius-md)' }"
          ></div>
        </div>
      </div>
    `
  })
} satisfies Meta<typeof ColorWheelComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithCustomHue: Story = {
  args: {
    hue: 180,
    saturation: 80,
    lightness: 50
  }
}

export const LowSaturation: Story = {
  args: {
    hue: 0,
    saturation: 30,
    lightness: 50
  }
}
