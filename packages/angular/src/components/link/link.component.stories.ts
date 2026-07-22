import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { LinkComponent } from './link.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<LinkComponent> = {
  title: 'Components/Navigation/Link',
  component: LinkComponent,
  decorators: [
    moduleMetadata({
      imports: [StoryComponent],
    }),
  ],
  argTypes: {},
};
export default meta;

type Story = StoryObj<LinkComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
    <qui-story>
      <a qui-link [href]="'https://platform.squid-ware.nl'">Default Link</a>
    </qui-story>
    `,
  }),
};

export const External: Story = {
  render: () => ({
    template: `
    <qui-story>
      <a qui-link href="https://platform.squid-ware.nl">Read the docs</a>
    </qui-story>
    `,
  }),
};

export const Internal: Story = {
  render: () => ({
    template: `
    <qui-story>
      <a qui-link href="/about">About us</a>
    </qui-story>
    `,
  }),
};

export const MultipleLinks: Story = {
  render: () => ({
    template: `
    <qui-story>
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <a qui-link href="https://platform.squid-ware.nl">Documentation</a>
        <a qui-link href="/about">About us</a>
        <a qui-link href="/contact">Contact support</a>
      </div>
    </qui-story>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
    <qui-story>
      <p style="max-width: 32rem; font-size: var(--font-size-sm);">
        By continuing, you agree to our <a qui-link href="/terms">Terms of Service</a> and
        <a qui-link href="/privacy">Privacy Policy</a>. Need help? Visit our
        <a qui-link href="https://platform.squid-ware.nl">documentation</a>.
      </p>
    </qui-story>
    `,
  }),
};
