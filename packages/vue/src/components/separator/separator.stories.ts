import type { Meta, StoryObj } from '@storybook/vue3'
import SeparatorComponent from './separator.vue'

const meta: Meta<typeof SeparatorComponent> = {
  title: 'Components/Layout/Separator',
  component: SeparatorComponent,
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical']
    },
    decorative: {
      control: { type: 'boolean' }
    }
  },
  args: {
    orientation: 'horizontal',
    decorative: true
  }
}

export default meta
type Story = StoryObj<typeof SeparatorComponent>

export const Default: Story = {
  render: (args) => ({
    components: { SeparatorComponent },
    setup() {
      return { args }
    },
    template: `
      <div style="width: 260px;">
        <h4 style="margin: 0 0 var(--spacing-1); font-size: var(--font-size-sm);">Account</h4>
        <p style="margin: 0; font-size: var(--font-size-sm); color: var(--color-muted-fg);">Manage your profile and preferences.</p>
        <SeparatorComponent v-bind="args" style="margin: var(--spacing-4) 0;" />
        <h4 style="margin: 0 0 var(--spacing-1); font-size: var(--font-size-sm);">Notifications</h4>
        <p style="margin: 0; font-size: var(--font-size-sm); color: var(--color-muted-fg);">Choose what you want to be notified about.</p>
      </div>
    `
  })
}

export const Composition: Story = {
  render: () => ({
    components: { SeparatorComponent },
    template: `
      <div style="display: flex; align-items: center; gap: var(--spacing-3); height: 24px;">
        <span style="font-size: var(--font-size-sm);">Bold</span>
        <SeparatorComponent orientation="vertical" decorative />
        <span style="font-size: var(--font-size-sm);">Italic</span>
        <SeparatorComponent orientation="vertical" decorative />
        <span style="font-size: var(--font-size-sm);">Underline</span>
      </div>
    `
  })
}
