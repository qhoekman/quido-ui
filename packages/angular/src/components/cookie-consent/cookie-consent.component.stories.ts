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
