import ClipboardComponent from '@/components/clipboard/clipboard.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Actions/Clipboard',
  component: ClipboardComponent,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive', 'outline', 'ghost', 'link']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon']
    },
    disabled: {
      control: 'boolean'
    },
    text: {
      control: 'text'
    },
    copiedDuration: {
      control: 'number'
    },
    asChild: {
      control: 'boolean'
    },
    as: {
      control: 'select',
      options: ['button', 'a']
    }
  },
  args: {
    variant: 'outline',
    size: 'md',
    disabled: false,
    text: 'Hello World',
    copiedDuration: 2000,
    asChild: false,
    as: 'button'
  },
  render: (args) => ({
    components: { ClipboardComponent },
    setup() {
      return { args }
    },
    template: '<ClipboardComponent v-bind="args" />'
  })
} satisfies Meta<typeof ClipboardComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: () => ({
    components: { ClipboardComponent },
    template: `
      <div style="display: flex; align-items: center; justify-content: space-between; gap: var(--spacing-4); padding: var(--spacing-3) var(--spacing-4); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-md); width: 420px;">
        <code style="font-family: var(--font-family-mono);">npm install @quido-ui/vue</code>
        <ClipboardComponent variant="ghost" size="icon" text="npm install @quido-ui/vue" />
      </div>
    `
  })
}

export const WithText: Story = {
  args: {
    text: 'Copy this text to clipboard'
  }
}

export const Small: Story = {
  args: {
    size: 'sm',
    text: 'Small clipboard button'
  }
}

export const Large: Story = {
  args: {
    size: 'lg',
    text: 'Large clipboard button'
  }
}

export const IconOnly: Story = {
  args: {
    size: 'icon',
    text: 'Icon only clipboard'
  }
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    text: 'Primary variant'
  }
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    text: 'Ghost variant'
  }
}
