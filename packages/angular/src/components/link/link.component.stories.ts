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
    <pui-story>
      <a pui-link [href]="'https://pulse.quido.online'">Default Link</a>
    </pui-story>
    `,
  }),
};
