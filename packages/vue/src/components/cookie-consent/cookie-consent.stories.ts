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
