import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { QrCodeComponent } from './qr-code.component';
import { StoryComponent } from '../../system/components/story/story.component';
const meta: Meta<QrCodeComponent> = {
  title: 'Components/Navigation/QR Code',
  component: QrCodeComponent,
  decorators: [
    moduleMetadata({
      imports: [StoryComponent],
    }),
  ],
  argTypes: {
    value: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<QrCodeComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
    <qui-story>
      <img qui-qr-code [value]="value" width="100" height="100" />
    </qui-story>
    `,
  }),
  args: {
    value: 'https://example.com',
  },
};

export const CustomValue: Story = {
  render: (args) => ({
    props: args,
    template: `
    <qui-story>
      <img qui-qr-code [value]="value" width="100" height="100" />
    </qui-story>
    `,
  }),
  args: {
    value: 'https://quido.online',
  },
};

export const LongValue: Story = {
  render: (args) => ({
    props: args,
    template: `
    <qui-story>
      <img qui-qr-code [value]="value" width="100" height="100" />
    </qui-story>
    `,
  }),
  args: {
    value: 'This is a very long QR code value that will generate a more complex QR code pattern',
  },
};

export const Composition: Story = {
  render: () => ({
    template: `
    <qui-story>
      <div style="display: flex; align-items: center; gap: var(--spacing-4); max-width: 320px; padding: var(--spacing-4); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
        <img qui-qr-code value="https://pulse.quido.online/invite/8f3k2" width="80" height="80" />
        <div>
          <h4 style="margin: 0 0 var(--spacing-1); font-size: var(--font-size-sm);">Scan to join the team</h4>
          <p style="margin: 0; color: var(--color-muted-fg); font-size: var(--font-size-sm);">This invite link expires in 7 days.</p>
        </div>
      </div>
    </qui-story>
    `,
  }),
};
