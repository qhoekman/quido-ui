import ColorSelectComponent from '@/components/color-select/color-select.vue'
import ColorSelectItemComponent from '@/components/color-select/color-select-item.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'

const meta = {
  title: 'Components/Data Entry/Color Select',
  component: ColorSelectComponent,
  argTypes: {
    value: {
      control: 'text',
      description: 'The selected color value'
    },
    defaultValue: {
      control: 'text',
      description: 'The default selected color value'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the color select is disabled'
    }
  },
  args: {
    disabled: false
  },
  render: (args) => ({
    components: {
      ColorSelectComponent,
      ColorSelectItemComponent
    },
    setup() {
      const selectedColor = ref(args.value ?? args.defaultValue ?? 'var(--color-red-500)')
      const colors = [
        'var(--color-red-500)',
        'var(--color-green-500)',
        'var(--color-blue-500)',
        'var(--color-yellow-500)',
        'var(--color-purple-500)',
        'var(--color-pink-500)'
      ]

      const handleValueChange = (value: string | undefined) => {
        selectedColor.value = value
      }

      return {
        args,
        selectedColor,
        colors,
        handleValueChange
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-4);">
        <ColorSelectComponent
          :value="args.value"
          :default-value="args.defaultValue"
          :disabled="args.disabled"
          @update:value="handleValueChange"
          @value-change="handleValueChange"
        >
          <ColorSelectItemComponent
            v-for="(color, index) in colors"
            :key="index"
            :color="color"
          />
        </ColorSelectComponent>
        <div
          v-if="selectedColor"
          style="padding: var(--spacing-4); border-radius: var(--border-radius-md); border: var(--border-width-default) solid var(--color-border); font-size: var(--font-size-sm); font-family: var(--font-family-mono);"
        >
          Selected: {{ selectedColor }}
        </div>
      </div>
    `
  })
} satisfies Meta<typeof ColorSelectComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: 'var(--color-red-500)'
  }
}

export const WithValue: Story = {
  args: {
    value: 'var(--color-blue-500)'
  }
}

export const Disabled: Story = {
  args: {
    defaultValue: 'var(--color-red-500)',
    disabled: true
  }
}

export const Composition: Story = {
  render: () => ({
    components: { ColorSelectComponent, ColorSelectItemComponent },
    setup() {
      const colors = [
        'var(--color-red-500)',
        'var(--color-green-500)',
        'var(--color-blue-500)',
        'var(--color-yellow-500)',
        'var(--color-purple-500)',
        'var(--color-pink-500)'
      ]
      return { colors }
    },
    template: `
      <div style="max-width: 280px; padding: var(--spacing-6); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
        <h3 style="margin: 0 0 var(--spacing-1);">Label Color</h3>
        <p style="margin: 0 0 var(--spacing-4); color: var(--color-muted-fg);">Choose a color to tag this project.</p>
        <ColorSelectComponent default-value="var(--color-blue-500)">
          <ColorSelectItemComponent
            v-for="(color, index) in colors"
            :key="index"
            :color="color"
          />
        </ColorSelectComponent>
      </div>
    `
  })
}
