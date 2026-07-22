import ColorSelectorComponent from '@/components/color-selector/color-selector.vue'
import ColorSelectorItemComponent from '@/components/color-selector/color-selector-item.vue'
import ColorSelectorItemsComponent from '@/components/color-selector/color-selector-items.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'

const meta = {
  title: 'Features/Ecommerce/Components/Color Selector',
  component: ColorSelectorComponent,
  argTypes: {
    disabled: {
      control: 'boolean'
    },
    required: {
      control: 'boolean'
    },
    name: {
      control: 'text'
    },
    defaultValue: {
      control: 'text'
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical']
    }
  },
  args: {
    disabled: false,
    required: false
  },
  render: (args) => ({
    components: {
      ColorSelectorComponent,
      ColorSelectorItemComponent,
      ColorSelectorItemsComponent
    },
    setup() {
      const selectedValue = ref(args.defaultValue ?? '')
      
      const handleValueChange = (value: string) => {
        selectedValue.value = value
      }

      return {
        args,
        selectedValue,
        handleValueChange
      }
    },
    template: `
      <form>
        <ColorSelectorComponent
          :value="args.value"
          :default-value="args.defaultValue"
          :disabled="args.disabled"
          :required="args.required"
          :name="args.name"
          :orientation="args.orientation"
          @update:value="handleValueChange"
          @value-change="handleValueChange"
        >
          <ColorSelectorItemsComponent>
            <ColorSelectorItemComponent color="red" value="red" />
            <ColorSelectorItemComponent color="yellow" value="yellow" />
            <ColorSelectorItemComponent color="green" value="green" />
            <ColorSelectorItemComponent color="blue" value="blue" />
            <ColorSelectorItemComponent color="indigo" value="indigo" />
          </ColorSelectorItemsComponent>
        </ColorSelectorComponent>
      </form>
    `
  })
} satisfies Meta<typeof ColorSelectorComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}

export const Composition: Story = {
  render: () => ({
    components: {
      ColorSelectorComponent,
      ColorSelectorItemComponent,
      ColorSelectorItemsComponent
    },
    template: `
      <form style="max-width: 16rem;">
        <h4 style="margin: 0 0 var(--spacing-1);">Classic Tee</h4>
        <p style="margin: 0 0 var(--spacing-4); color: var(--color-muted-fg); font-size: var(--font-size-sm);">$28.00</p>
        <label style="display: block; margin-bottom: var(--spacing-2);">Color</label>
        <ColorSelectorComponent default-value="blue">
          <ColorSelectorItemsComponent>
            <ColorSelectorItemComponent color="red" value="red" />
            <ColorSelectorItemComponent color="yellow" value="yellow" />
            <ColorSelectorItemComponent color="green" value="green" />
            <ColorSelectorItemComponent color="blue" value="blue" />
            <ColorSelectorItemComponent color="indigo" value="indigo" />
          </ColorSelectorItemsComponent>
        </ColorSelectorComponent>
      </form>
    `
  })
}
