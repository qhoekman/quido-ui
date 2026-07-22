import CheckboxComponent from '@/components/checkbox/checkbox.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref, watch } from 'vue'

const meta = {
  title: 'Components/Data Entry/Checkbox',
  component: CheckboxComponent,
  argTypes: {
    checked: {
      control: 'boolean'
    },
    defaultChecked: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    required: {
      control: 'boolean'
    },
    name: {
      control: 'text'
    },
    value: {
      control: 'text'
    }
  },
  args: {
    checked: false,
    disabled: false,
    required: false
  },
  render: (args) => ({
    components: { CheckboxComponent },
    setup() {
      // Use controlled mode with v-model for Storybook
      const checked = ref(args.checked ?? false)

      // Watch for changes to checked from Controls
      watch(
        () => args.checked,
        (newValue) => {
          checked.value = newValue ?? false
        }
      )

      return { args, checked }
    },
    template: `
      <div style="display: flex; align-items: center; gap: var(--spacing-2);">
        <CheckboxComponent
          id="terms"
          v-model:checked="checked"
          :disabled="args.disabled"
          :required="args.required"
          :name="args.name"
          :value="args.value"
        />
        <label for="terms" style="font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">
          Accept terms and conditions
        </label>
      </div>
    `
  })
} satisfies Meta<typeof CheckboxComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: () => ({
    components: { CheckboxComponent },
    setup() {
      const email = ref(true)
      const sms = ref(false)
      const push = ref(true)
      return { email, sms, push }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-3); max-width: 280px;">
        <h3 style="margin: 0;">Notification Preferences</h3>
        <div style="display: flex; align-items: center; gap: var(--spacing-2);">
          <CheckboxComponent id="email" v-model:checked="email" />
          <label for="email" style="font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">Email notifications</label>
        </div>
        <div style="display: flex; align-items: center; gap: var(--spacing-2);">
          <CheckboxComponent id="sms" v-model:checked="sms" />
          <label for="sms" style="font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">SMS notifications</label>
        </div>
        <div style="display: flex; align-items: center; gap: var(--spacing-2);">
          <CheckboxComponent id="push" v-model:checked="push" />
          <label for="push" style="font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">Push notifications</label>
        </div>
      </div>
    `
  })
}
