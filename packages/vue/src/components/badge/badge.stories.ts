import BadgeComponent from '@/components/badge/badge.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Data Display/Badge',
  component: BadgeComponent,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive', 'outline']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    asChild: {
      control: 'boolean'
    },
    as: {
      control: 'select',
      options: ['span', 'div']
    }
  },
  args: {
    variant: 'primary',
    size: 'md',
    asChild: false,
    as: 'span'
  },
  render: (args) => ({
    components: { BadgeComponent },
    setup() {
      return { args }
    },
    template: '<div>Notifications<BadgeComponent v-bind="args">3</BadgeComponent></div>'
  })
} satisfies Meta<typeof BadgeComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithText: Story = {
  render: (args) => ({
    components: { BadgeComponent },
    setup() {
      return { args }
    },
    template: '<div>Messages<BadgeComponent v-bind="args">99+</BadgeComponent></div>'
  })
}

export const Sizes: Story = {
  render: () => ({
    components: { BadgeComponent },
    template: `
      <div style="display: flex; gap: var(--spacing-4); align-items: center;">
        <BadgeComponent size="sm">5</BadgeComponent>
        <BadgeComponent size="md">12</BadgeComponent>
        <BadgeComponent size="lg">42</BadgeComponent>
      </div>
    `
  })
}

export const Variants: Story = {
  render: () => ({
    components: { BadgeComponent },
    template: `
      <div style="display: flex; gap: var(--spacing-4); align-items: center;">
        <BadgeComponent variant="primary">Primary</BadgeComponent>
        <BadgeComponent variant="secondary">Secondary</BadgeComponent>
        <BadgeComponent variant="destructive">Destructive</BadgeComponent>
        <BadgeComponent variant="outline">Outline</BadgeComponent>
      </div>
    `
  })
}

export const Composition: Story = {
  render: () => ({
    components: { BadgeComponent },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-2); width: 200px;">
        <div style="display: flex; justify-content: space-between;">
          <span>Inbox</span>
          <BadgeComponent>12</BadgeComponent>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span>Spam</span>
          <BadgeComponent variant="destructive">3</BadgeComponent>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span>Archived</span>
        </div>
      </div>
    `
  })
}
