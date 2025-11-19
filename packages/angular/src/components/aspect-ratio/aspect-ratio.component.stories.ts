import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { SkeletonComponent } from '../skeleton/skeleton.component';
import { AspectRatioComponent } from './aspect-ratio.component';

const meta: Meta<AspectRatioComponent> = {
  title: 'Components/Layout/Aspect Ratio',
  component: AspectRatioComponent,
  decorators: [
    moduleMetadata({
      imports: [AspectRatioComponent, SkeletonComponent],
    }),
  ],
  argTypes: {
    // Define any controls for the dropdown menu component if needed
  },
};
export default meta;

type Story = StoryObj<AspectRatioComponent>;

export const Default: Story = {
  args: {},

  render: (args) => ({
    props: args,
    template: `
      <div qui-aspect-ratio="16 / 9">
        <div qui-skeleton style="width: 100%; height: 120vh;"></div>
      </div>
    `,
  }),
};
