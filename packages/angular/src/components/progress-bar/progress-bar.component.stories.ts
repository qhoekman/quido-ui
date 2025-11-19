import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { ProgressBarComponent } from './progress-bar.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<ProgressBarComponent> = {
  title: 'Components/Feedback/Progress Bar',
  component: ProgressBarComponent,
  decorators: [
    moduleMetadata({
      imports: [StoryComponent],
    }),
  ],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100 },
      description: 'The progress value of the bar',
    },
  },
};
export default meta;

type Story = StoryObj<ProgressBarComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
    <pui-story>
        <div pui-progress-bar [value]="value"></div>

    </pui-story>
    `,
  }),
  args: {
    value: 50, // Default value for the progress bar
  },
};

export const Indeterminate: Story = {
  args: {
    value: undefined,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="width: 100%; padding: 10px;">
        <div pui-progress-bar [value]="value"></div>
      </div>
    `,
  }),
};
