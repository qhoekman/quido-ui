import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

import { SpotlightGalleryItemDirective } from './spotlight-gallery-item.directive';
import { SpotlightGalleryComponent } from './spotlight-gallery.component';
import { SpotlightGalleryImageComponent } from './spotlight-gallery-image.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<SpotlightGalleryComponent> = {
  title: 'Components/Data Display/Spotlight Gallery',
  component: SpotlightGalleryComponent,
  decorators: [
    moduleMetadata({
      imports: [
        SpotlightGalleryComponent,
        SpotlightGalleryItemDirective,
        SpotlightGalleryImageComponent,
        StoryComponent,
      ],
    }),
  ],
  argTypes: {
    // Define any props or controls if needed
  },
};
export default meta;

type Story = StoryObj<SpotlightGalleryComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <div qui-story style="width: 300px;">
      <qui-spotlight-gallery>
        <ng-template puiSpotlightGalleryItem>
          <img qui-spotlight-gallery-image src="https://placehold.co/150x150" alt="Image 1" />
        </ng-template>
        <ng-template puiSpotlightGalleryItem>
          <img qui-spotlight-gallery-image src="https://placehold.co/151x151" alt="Image 2" />
        </ng-template>
        <ng-template puiSpotlightGalleryItem>
          <img qui-spotlight-gallery-image src="https://placehold.co/152x152" alt="Image 3" />
        </ng-template>
        </qui-spotlight-gallery>
      </div>
    `,
  }),
};
