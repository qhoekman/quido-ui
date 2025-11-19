import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { StarRatingComponent } from './star-rating.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<StarRatingComponent> = {
  title: 'Components/Feedback/Star Rating',
  component: StarRatingComponent,
  decorators: [
    moduleMetadata({
      imports: [StarRatingComponent, StoryComponent],
    }),
  ],
  argTypes: {
    rating: { control: 'number', description: 'Current rating value' },
    stars: { control: 'number', description: 'Total number of stars' },
  },
};
export default meta;

type Story = StoryObj<StarRatingComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
    <pui-story>
      <div pui-star-rating [rating]="rating" [stars]="stars"></div>
    </pui-story>
    `,
  }),
  args: {
    rating: 3,
    stars: 5,
  },
};
