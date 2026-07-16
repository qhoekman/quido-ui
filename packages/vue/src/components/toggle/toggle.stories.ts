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
    template: '<Toggle v-model:pressed="pressed" :variant="args.variant" :size="args.size" :disabled="args.disabled">Toggle</Toggle>'
  })
} satisfies Meta<typeof Toggle>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
