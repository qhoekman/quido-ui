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
    <qui-story>
      <div qui-star-rating [rating]="rating" [stars]="stars"></div>
    </qui-story>
    `,
  }),
  args: {
    rating: 3,
    stars: 5,
  },
};

export const DifferentRatings: Story = {
  render: () => ({
    template: `
    <qui-story>
      <div style="display: flex; flex-direction: column; gap: var(--spacing-4);">
        <div qui-star-rating [rating]="0" [stars]="5"></div>
        <div qui-star-rating [rating]="1" [stars]="5"></div>
        <div qui-star-rating [rating]="2" [stars]="5"></div>
        <div qui-star-rating [rating]="3" [stars]="5"></div>
        <div qui-star-rating [rating]="4" [stars]="5"></div>
        <div qui-star-rating [rating]="5" [stars]="5"></div>
      </div>
    </qui-story>
    `,
  }),
};

export const DifferentStarCounts: Story = {
  render: () => ({
    template: `
    <qui-story>
      <div style="display: flex; flex-direction: column; gap: var(--spacing-4);">
        <div qui-star-rating [rating]="3" [stars]="3"></div>
        <div qui-star-rating [rating]="3" [stars]="5"></div>
        <div qui-star-rating [rating]="3" [stars]="10"></div>
      </div>
    </qui-story>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
    <qui-story>
      <div style="max-width: 16rem; padding: var(--spacing-4); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg); box-sizing: border-box;">
        <h4 style="margin: 0 0 var(--spacing-1);">Classic Tee</h4>
        <div style="display: flex; align-items: center; gap: var(--spacing-2);">
          <div qui-star-rating [rating]="4.5" [stars]="5"></div>
          <span style="font-size: var(--font-size-sm); color: var(--color-muted-fg);">128 reviews</span>
        </div>
      </div>
    </qui-story>
    `,
  }),
};
