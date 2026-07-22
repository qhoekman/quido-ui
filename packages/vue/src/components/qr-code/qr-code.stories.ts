import QrCodeComponent from '@/components/qr-code/qr-code.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Navigation/QR Code',
  component: QrCodeComponent,
  argTypes: {
    value: {
      control: 'text'
    },
    asChild: {
      control: 'boolean'
    }
  },
  args: {
    value: 'https://example.com',
    asChild: false
  },
  render: (args) => ({
    components: { QrCodeComponent },
    setup() {
      return { args }
    },
    template: '<QrCodeComponent v-bind="args" width="100" height="100" />'
  })
} satisfies Meta<typeof QrCodeComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CustomValue: Story = {
  args: {
    value: 'https://quido.online'
  }
}

export const LongValue: Story = {
  args: {
    value: 'This is a very long QR code value that will generate a more complex QR code pattern'
  }
}

export const Composition: Story = {
  render: () => ({
    components: { QrCodeComponent },
    template: `
      <div style="display: flex; align-items: center; gap: var(--spacing-4); max-width: 320px; padding: var(--spacing-4); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
        <QrCodeComponent value="https://pulse.quido.online/invite/8f3k2" width="80" height="80" />
        <div>
          <h4 style="margin: 0 0 var(--spacing-1); font-size: var(--font-size-sm);">Scan to join the team</h4>
          <p style="margin: 0; color: var(--color-muted-fg); font-size: var(--font-size-sm);">This invite link expires in 7 days.</p>
        </div>
      </div>
    `
  })
}
