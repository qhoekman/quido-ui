import { ref } from 'vue'
import PasswordStrengthComponent from '@/components/password-strength/password-strength.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Feedback/Password Strength',
  component: PasswordStrengthComponent,
  argTypes: {
    value: {
      control: 'text',
      description: 'The password input to evaluate strength',
    },
    requirements: {
      control: 'object',
      description: 'Array of password requirements',
    },
    thresholds: {
      control: 'object',
      description: 'Thresholds for determining strength levels',
    },
  },
  args: {
    value: '',
    requirements: [
      { regex: /.{8,}/, description: 'At least 8 characters' },
      { regex: /[a-z]/, description: 'At least one lowercase letter' },
      { regex: /[A-Z]/, description: 'At least one uppercase letter' },
      { regex: /[0-9]/, description: 'At least one number' },
      { regex: /[^A-Za-z0-9]/, description: 'At least one special character' },
    ],
    thresholds: [2, 4],
  },
  render: (args) => ({
    components: { PasswordStrengthComponent },
    setup() {
      return { args }
    },
    template: '<PasswordStrengthComponent v-bind="args" />',
  }),
} satisfies Meta<typeof PasswordStrengthComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Weak: Story = {
  args: {
    value: 'weak',
  },
}

export const Medium: Story = {
  args: {
    value: 'Medium123',
  },
}

export const Strong: Story = {
  args: {
    value: 'Strong123!@#',
  },
}

export const Composition: Story = {
  render: () => ({
    components: { PasswordStrengthComponent },
    template: `
      <div style="max-width: 400px;">
        <label style="display: block; margin-bottom: var(--spacing-1); font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">Password</label>
        <input
          type="password"
          value="Str0ng!Pass"
          readonly
          style="width: 100%; padding: var(--spacing-2); margin-bottom: var(--spacing-2); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-md);"
        />
        <PasswordStrengthComponent value="Str0ng!Pass" />
      </div>
    `,
  }),
}

export const Interactive: Story = {
  render: () => ({
    components: { PasswordStrengthComponent },
    setup() {
      const password = ref('')
      return { password }
    },
    template: `
      <div style="max-width: 400px;">
        <input
          v-model="password"
          type="password"
          placeholder="Enter password"
          style="width: 100%; padding: var(--spacing-2); margin-bottom: var(--spacing-2); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-md);"
        />
        <PasswordStrengthComponent :value="password" />
      </div>
    `,
  }),
}
