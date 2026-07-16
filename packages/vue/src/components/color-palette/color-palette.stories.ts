import ColorPaletteComponent from '@/components/color-palette/color-palette.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'

const meta = {
  title: 'Components/Data Entry/Color Palette',
  component: ColorPaletteComponent,
  argTypes: {
    color: {
      control: 'text',
      description: 'The selected color value (CSS variable or hex)'
    }
  },
  args: {
    color: null
  },
  render: (args) => ({
    components: {
      ColorPaletteComponent
    },
    setup() {
      const selectedColor = ref(args.color ?? null)

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
      <div style="display: flex; flex-direction: column; gap: var(--spacing-4);">
        <ColorPaletteComponent
          :color="selectedColor"
          @value-change="handleValueChange"
        />
        <div
          v-if="selectedColor"
          style="padding: var(--spacing-4); border-radius: var(--border-radius-md); border: var(--border-width-default) solid var(--color-border); font-size: var(--font-size-sm); font-family: var(--font-family-mono);"
        >
          Selected: {{ selectedColor }}
        </div>
      </div>
    `
  })
} satisfies Meta<typeof ColorPaletteComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithSelectedColor: Story = {
  args: {
    color: 'var(--color-blue-500)'
  }
}
