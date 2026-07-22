import KbdComponent from '@/components/kbd/kbd.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Data Display/Kbd',
  component: KbdComponent,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    asChild: {
      control: 'boolean'
    }
  },
  args: {
    variant: 'default',
    size: 'md',
    asChild: false
  },
  render: (args) => ({
    components: { KbdComponent },
    setup() {
      return { args }
    },
    template: '<p>Press <KbdComponent v-bind="args">CMD</KbdComponent> + <KbdComponent v-bind="args">K</KbdComponent> to see the effect</p>'
  })
} satisfies Meta<typeof KbdComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sizes: Story = {
  render: () => ({
    components: { KbdComponent },
    template: `
      <div style="display: flex; gap: var(--spacing-4); align-items: center; flex-wrap: wrap;">
        <p>Press <KbdComponent size="sm">CMD</KbdComponent> + <KbdComponent size="sm">K</KbdComponent></p>
        <p>Press <KbdComponent size="md">CMD</KbdComponent> + <KbdComponent size="md">K</KbdComponent></p>
        <p>Press <KbdComponent size="lg">CMD</KbdComponent> + <KbdComponent size="lg">K</KbdComponent></p>
      </div>
    `
  })
}

export const Composition: Story = {
  render: () => ({
    components: { KbdComponent },
    template: `
      <div style="max-width: 320px; display: flex; flex-direction: column; gap: var(--spacing-3);">
        <h3 style="margin: 0;">Keyboard Shortcuts</h3>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span>Open search</span>
          <span><KbdComponent size="sm">CMD</KbdComponent> + <KbdComponent size="sm">K</KbdComponent></span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span>Save changes</span>
          <span><KbdComponent size="sm">CMD</KbdComponent> + <KbdComponent size="sm">S</KbdComponent></span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span>New tab</span>
          <span><KbdComponent size="sm">CMD</KbdComponent> + <KbdComponent size="sm">T</KbdComponent></span>
        </div>
      </div>
    `
  })
}
