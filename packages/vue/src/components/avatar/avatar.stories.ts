import AvatarComponent from '@/components/avatar/avatar.vue'
import AvatarImageComponent from '@/components/avatar/avatar-image.vue'
import AvatarFallbackComponent from '@/components/avatar/avatar-fallback.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Data Display/Avatar',
  component: AvatarComponent,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary']
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
    variant: 'primary',
    size: 'md',
    asChild: false
  },
  render: (args) => ({
    components: {
      AvatarComponent,
      AvatarImageComponent,
      AvatarFallbackComponent
    },
    setup() {
      return { args }
    },
    template: `
      <AvatarComponent v-bind="args">
        <AvatarImageComponent src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=128&h=128&facepad=2" alt="Avatar" />
        <AvatarFallbackComponent>JD</AvatarFallbackComponent>
      </AvatarComponent>
    `
  })
} satisfies Meta<typeof AvatarComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Fallback: Story = {
  render: (args) => ({
    components: {
      AvatarComponent,
      AvatarImageComponent,
      AvatarFallbackComponent
    },
    setup() {
      return { args }
    },
    template: `
      <AvatarComponent v-bind="args">
        <AvatarImageComponent src="/icon.png" alt="Avatar" />
        <AvatarFallbackComponent>JD</AvatarFallbackComponent>
      </AvatarComponent>
    `
  })
}

export const Sizes: Story = {
  render: (args) => ({
    components: {
      AvatarComponent,
      AvatarImageComponent,
      AvatarFallbackComponent
    },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; align-items: center; gap: var(--spacing-4);">
        <AvatarComponent size="sm">
          <AvatarImageComponent src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=128&h=128&facepad=2" alt="Avatar" />
          <AvatarFallbackComponent>JD</AvatarFallbackComponent>
        </AvatarComponent>
        <AvatarComponent size="md">
          <AvatarImageComponent src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=128&h=128&facepad=2" alt="Avatar" />
          <AvatarFallbackComponent>JD</AvatarFallbackComponent>
        </AvatarComponent>
        <AvatarComponent size="lg">
          <AvatarImageComponent src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=128&h=128&facepad=2" alt="Avatar" />
          <AvatarFallbackComponent>JD</AvatarFallbackComponent>
        </AvatarComponent>
      </div>
    `
  })
}

export const Composition: Story = {
  render: () => ({
    components: {
      AvatarComponent,
      AvatarImageComponent,
      AvatarFallbackComponent
    },
    template: `
      <div style="display: flex; align-items: center; gap: var(--spacing-3);">
        <AvatarComponent>
          <AvatarImageComponent src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=128&h=128&facepad=2" alt="Avatar" />
          <AvatarFallbackComponent>JD</AvatarFallbackComponent>
        </AvatarComponent>
        <div>
          <div style="font-weight: var(--font-weight-semibold);">Jane Doe</div>
          <div style="color: var(--color-muted-fg); font-size: var(--font-size-sm);">Product Designer</div>
        </div>
      </div>
    `
  })
}
