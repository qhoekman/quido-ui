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
        <CalloutTitleComponent>Callout Title</CalloutTitleComponent>
        <CalloutDescriptionComponent>
          <p>This is a description inside the callout component.</p>
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
