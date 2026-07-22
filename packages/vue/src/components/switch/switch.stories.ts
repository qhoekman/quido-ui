import SwitchComponent from '@/components/switch/switch.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref, watch } from 'vue'

const meta = {
  title: 'Components/Data Entry/Switch',
  component: SwitchComponent,
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
    components: { SwitchComponent },
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
        <SwitchComponent
          id="notifications"
          v-model:checked="checked"
          :disabled="args.disabled"
          :required="args.required"
          :name="args.name"
          :value="args.value"
        />
        <label for="notifications" style="font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">
          Enable notifications
        </label>
      </div>
    `
  })
} satisfies Meta<typeof SwitchComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: () => ({
    components: { SwitchComponent },
    setup() {
      const darkMode = ref(true);
      const emailUpdates = ref(false);
      return { darkMode, emailUpdates };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-3); max-width: 280px;">
        <h3 style="margin: 0;">Settings</h3>
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <label for="dark-mode" style="font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">Dark mode</label>
          <SwitchComponent id="dark-mode" v-model:checked="darkMode" />
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <label for="email-updates" style="font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">Email updates</label>
          <SwitchComponent id="email-updates" v-model:checked="emailUpdates" />
        </div>
      </div>
    `,
  }),
};
