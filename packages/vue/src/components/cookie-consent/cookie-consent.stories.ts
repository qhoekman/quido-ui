import type { Meta, StoryObj } from '@storybook/vue3'
import CookieConsent from './cookie-consent.vue'

const meta: Meta<typeof CookieConsent> = {
  title: 'Components/Feedback/Cookie Consent',
  component: CookieConsent,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof CookieConsent>

export const Default: Story = {
  render: () => ({
    components: { CookieConsent },
    template: '<CookieConsent />',
  }),
}

export const Composition: Story = {
  render: () => ({
    components: { CookieConsent },
    template: `
      <div style="height: 320px; padding: var(--spacing-6); background-color: var(--color-muted);">
        <h3 style="margin: 0 0 var(--spacing-2);">Dashboard</h3>
        <p style="color: var(--color-muted-fg); font-size: var(--font-size-sm);">Your usage summary and recent activity will appear here.</p>
        <CookieConsent />
      </div>
    `,
  }),
}
