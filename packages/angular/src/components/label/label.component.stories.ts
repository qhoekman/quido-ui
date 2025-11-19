import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { LabelComponent } from './label.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<LabelComponent> = {
  title: 'Components/Data Entry/Label',
  component: LabelComponent,
  decorators: [
    moduleMetadata({
      imports: [StoryComponent],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
  },
};
export default meta;

type Story = StoryObj<LabelComponent>;

export const Default: Story = {
  args: {
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `
      <pui-story>
        <label [size]="size">Label</label>
      </pui-story>
    `,
  }),
};
