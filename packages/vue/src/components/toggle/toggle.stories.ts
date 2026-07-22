import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Toggle from './toggle.vue'
import { ref, watch } from 'vue'

const meta = {
  title: 'Components/Actions/Toggle',
  component: Toggle,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'outline', 'default']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    disabled: {
      control: 'boolean'
    },
    pressed: {
      control: 'boolean'
    }
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    pressed: false
  },
  render: (args) => ({
    components: { Toggle },
    setup() {
      const pressed = ref(args.pressed ?? false)

      watch(
        () => args.pressed,
        (newValue) => {
          pressed.value = newValue ?? false
        }
      )

      return { args, pressed }
    },
    template: '<Toggle v-model:pressed="pressed" :variant="args.variant" :size="args.size" :disabled="args.disabled">Bold</Toggle>'
  })
} satisfies Meta<typeof Toggle>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: () => ({
    components: { Toggle },
    setup() {
      const bold = ref(true)
      const italic = ref(false)
      const underline = ref(false)
      return { bold, italic, underline }
    },
    template: `
      <div style="display: flex; gap: var(--spacing-2);">
        <Toggle v-model:pressed="bold" variant="outline">Bold</Toggle>
        <Toggle v-model:pressed="italic" variant="outline">Italic</Toggle>
        <Toggle v-model:pressed="underline" variant="outline">Underline</Toggle>
      </div>
    `
  })
}
