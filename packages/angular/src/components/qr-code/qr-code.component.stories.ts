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
    <pui-story>
      <img pui-qr-code [value]="value" width="100" height="100" />
    </pui-story>
    `,
  }),
  args: {
    value: 'https://example.com',
  },
};
