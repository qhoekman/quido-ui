import ColorPickerComponent from '@/components/color-picker/color-picker.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'

const meta = {
  title: 'Components/Data Entry/Color Picker',
  component: ColorPickerComponent,
  argTypes: {
    color: {
      control: 'text',
      description: 'The selected color value (hex, rgb, hsl, or CSS variable)'
    }
  },
  args: {
    color: '#000000'
  },
  render: (args) => ({
    components: {
      ColorPickerComponent
    },
    setup() {
      const selectedColor = ref(args.color ?? '#000000')

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
      <ColorPickerComponent
        :color="selectedColor"
        @value-change="handleValueChange"
      />
    `
  })
} satisfies Meta<typeof ColorPickerComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithInitialColor: Story = {
  args: {
    color: '#3b82f6'
  }
}

export const WithCSSVariable: Story = {
  args: {
    color: 'var(--color-blue-500)'
  }
}

export const Composition: Story = {
  render: () => ({
    components: { ColorPickerComponent },
    setup() {
      const selectedColor = ref('#3b82f6')

      const handleValueChange = (value: string) => {
        selectedColor.value = value
      }

      return { selectedColor, handleValueChange }
    },
    template: `
      <div style="max-width: 280px; padding: var(--spacing-6); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
        <h3 style="margin: 0 0 var(--spacing-1);">Brand Color</h3>
        <p style="margin: 0 0 var(--spacing-4); color: var(--color-muted-fg);">This color is used for your workspace's primary buttons and links.</p>
        <ColorPickerComponent :color="selectedColor" @value-change="handleValueChange" />
      </div>
    `
  })
}
