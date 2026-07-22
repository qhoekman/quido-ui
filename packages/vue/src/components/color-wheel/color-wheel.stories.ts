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

export const Composition: Story = {
  render: () => ({
    components: { ColorWheelComponent },
    setup() {
      const selectedColor = ref('hsl(265, 80%, 55%)')

      const handleValueChange = (value: string) => {
        selectedColor.value = value
      }

      return { selectedColor, handleValueChange }
    },
    template: `
      <div style="max-width: 280px; padding: var(--spacing-6); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
        <h3 style="margin: 0 0 var(--spacing-1);">Custom Theme Color</h3>
        <p style="margin: 0 0 var(--spacing-4); color: var(--color-muted-fg);">Pick an exact hue, saturation, and lightness.</p>
        <ColorWheelComponent :hue="265" :saturation="80" :lightness="55" @value-change="handleValueChange" />
      </div>
    `
  })
}
