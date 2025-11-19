import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { ColorWheelComponent } from './color-wheel.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<ColorWheelComponent> = {
  title: 'Components/Data Entry/Color Wheel',
  component: ColorWheelComponent,
  decorators: [
    moduleMetadata({
      imports: [StoryComponent],
    }),
  ],
};
export default meta;

type Story = StoryObj<ColorWheelComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <qui-color-wheel></qui-color-wheel>
      </qui-story>
    `,
  }),
};
