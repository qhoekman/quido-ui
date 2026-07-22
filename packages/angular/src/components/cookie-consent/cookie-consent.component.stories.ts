import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { CookieConsentComponent } from './cookie-consent.component';
import { CookieConsentService } from './cookie-consent.service';

const meta: Meta<CookieConsentComponent> = {
  title: 'Components/Feedback/Cookie Consent',
  component: CookieConsentComponent,
  decorators: [
    moduleMetadata({
      providers: [CookieConsentService],
    }),
  ],
  argTypes: {},
};
export default meta;

type Story = StoryObj<CookieConsentComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <qui-cookie-consent></qui-cookie-consent>
    `,
  }),
};

export const Composition: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="height: 320px; padding: var(--spacing-6); background-color: var(--color-muted);">
        <h3 style="margin: 0 0 var(--spacing-2);">Dashboard</h3>
        <p style="color: var(--color-muted-fg); font-size: var(--font-size-sm);">Your usage summary and recent activity will appear here.</p>
        <qui-cookie-consent></qui-cookie-consent>
      </div>
    `,
  }),
};
