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
