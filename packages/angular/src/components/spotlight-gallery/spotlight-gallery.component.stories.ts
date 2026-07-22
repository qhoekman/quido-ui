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
          <img qui-spotlight-gallery-image src="https://placehold.co/300x300/1e293b/ffffff?text=Front" alt="Product photo — front view" />
        </ng-template>
        <ng-template puiSpotlightGalleryItem>
          <img qui-spotlight-gallery-image src="https://placehold.co/300x300/334155/ffffff?text=Side" alt="Product photo — side view" />
        </ng-template>
        <ng-template puiSpotlightGalleryItem>
          <img qui-spotlight-gallery-image src="https://placehold.co/300x300/475569/ffffff?text=Detail" alt="Product photo — detail shot" />
        </ng-template>
        </qui-spotlight-gallery>
      </div>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
      <div style="max-width: 320px; padding: var(--spacing-6); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
        <h3 style="margin: 0 0 var(--spacing-1);">Listing Photos</h3>
        <p style="margin: 0 0 var(--spacing-4); color: var(--color-muted-fg);">Click a thumbnail to view it in full size.</p>
        <qui-spotlight-gallery>
          <ng-template puiSpotlightGalleryItem>
            <img qui-spotlight-gallery-image src="https://placehold.co/300x300/0f766e/ffffff?text=Living+Room" alt="Living room" />
          </ng-template>
          <ng-template puiSpotlightGalleryItem>
            <img qui-spotlight-gallery-image src="https://placehold.co/300x300/115e59/ffffff?text=Kitchen" alt="Kitchen" />
          </ng-template>
          <ng-template puiSpotlightGalleryItem>
            <img qui-spotlight-gallery-image src="https://placehold.co/300x300/134e4a/ffffff?text=Bedroom" alt="Bedroom" />
          </ng-template>
        </qui-spotlight-gallery>
      </div>
    `,
  }),
};
