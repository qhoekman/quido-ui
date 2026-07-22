import CalloutComponent from '@/components/callout/callout.vue'
import CalloutIndicatorComponent from '@/components/callout/callout-indicator.vue'
import CalloutTitleComponent from '@/components/callout/callout-title.vue'
import CalloutDescriptionComponent from '@/components/callout/callout-description.vue'
import { Info } from 'lucide-vue-next'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Feedback/Callout',
  component: CalloutComponent,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive']
    }
  },
  args: {
    variant: 'default'
  },
  render: (args) => ({
    components: {
      CalloutComponent,
      CalloutIndicatorComponent,
      CalloutTitleComponent,
      CalloutDescriptionComponent,
      Info
    },
    setup() {
      return { args }
    },
    template: `
      <CalloutComponent
        :variant="args.variant"
        style="max-width: var(--breakpoint-md);"
      >
        <CalloutIndicatorComponent>
          <Info :size="20" />
        </CalloutIndicatorComponent>
        <CalloutTitleComponent>{{ args.variant === 'destructive' ? 'Payment failed' : 'New features available' }}</CalloutTitleComponent>
        <CalloutDescriptionComponent>
          <p>{{ args.variant === 'destructive' ? "We couldn't process your payment. Please update your billing details to avoid service interruption." : 'Check out the new dashboard widgets and dark mode support in this release.' }}</p>
        </CalloutDescriptionComponent>
      </CalloutComponent>
    `
  })
} satisfies Meta<typeof CalloutComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default'
  }
}

export const Destructive: Story = {
  args: {
    variant: 'destructive'
  }
}

export const Composition: Story = {
  render: () => ({
    components: {
      CalloutComponent,
      CalloutIndicatorComponent,
      CalloutTitleComponent,
      CalloutDescriptionComponent,
      Info
    },
    template: `
      <div style="max-width: var(--breakpoint-md);">
        <h3 style="margin: 0 0 var(--spacing-4);">Billing</h3>
        <CalloutComponent variant="destructive" style="margin-bottom: var(--spacing-4);">
          <CalloutIndicatorComponent>
            <Info :size="20" />
          </CalloutIndicatorComponent>
          <CalloutTitleComponent>Payment failed</CalloutTitleComponent>
          <CalloutDescriptionComponent>
            <p>We couldn't process your payment. Please update your billing details to avoid service interruption.</p>
          </CalloutDescriptionComponent>
        </CalloutComponent>
        <p style="color: var(--color-muted-fg); font-size: var(--font-size-sm);">Update your payment method below to keep your subscription active.</p>
      </div>
    `
  })
}
