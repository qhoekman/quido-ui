import CountdownComponent from '@/components/countdown/countdown.vue'
import CountdownItemComponent from '@/components/countdown/countdown-item.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Data Display/Countdown',
  component: CountdownComponent,
  argTypes: {
    date: {
      control: 'number',
      description: 'Target date as timestamp (milliseconds since epoch)'
    },
    asChild: {
      control: 'boolean'
    },
    as: {
      control: 'select',
      options: ['div']
    }
  },
  args: {
    date: new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000).getTime()
  },
  render: (args) => ({
    components: { CountdownComponent, CountdownItemComponent },
    setup() {
      return { args }
    },
    template: `
      <CountdownComponent v-bind="args" v-slot="{ hours, minutes, seconds }">
        <CountdownItemComponent>{{ hours }}</CountdownItemComponent>:
        <CountdownItemComponent>{{ minutes }}</CountdownItemComponent>:
        <CountdownItemComponent>{{ seconds }}</CountdownItemComponent>
      </CountdownComponent>
    `
  })
} satisfies Meta<typeof CountdownComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: () => ({
    components: { CountdownComponent, CountdownItemComponent },
    setup() {
      const date = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000).getTime()
      return { date }
    },
    template: `
      <div style="max-width: 360px; padding: var(--spacing-6); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg); text-align: center;">
        <h3 style="margin: 0 0 var(--spacing-1);">Summer Sale Ends In</h3>
        <p style="margin: 0 0 var(--spacing-4); color: var(--color-muted-fg);">Get 30% off all annual plans before the timer runs out.</p>
        <CountdownComponent :date="date" v-slot="{ hours, minutes, seconds }">
          <CountdownItemComponent>{{ hours }}</CountdownItemComponent>:
          <CountdownItemComponent>{{ minutes }}</CountdownItemComponent>:
          <CountdownItemComponent>{{ seconds }}</CountdownItemComponent>
        </CountdownComponent>
      </div>
    `
  })
}

export const WithCustomDate: Story = {
  args: {
    date: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).getTime()
  }
}

export const LongCountdown: Story = {
  args: {
    date: new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000).getTime()
  },
  render: (args) => ({
    components: { CountdownComponent, CountdownItemComponent },
    setup() {
      return { args }
    },
    template: `
      <CountdownComponent v-bind="args" v-slot="{ years, months, days, hours, minutes, seconds }">
        <CountdownItemComponent>{{ years }}</CountdownItemComponent>y
        <CountdownItemComponent>{{ months }}</CountdownItemComponent>m
        <CountdownItemComponent>{{ days }}</CountdownItemComponent>d
        <CountdownItemComponent>{{ hours }}</CountdownItemComponent>h
        <CountdownItemComponent>{{ minutes }}</CountdownItemComponent>m
        <CountdownItemComponent>{{ seconds }}</CountdownItemComponent>s
      </CountdownComponent>
    `
  })
}
