import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import {
  IconChevronLeftComponent,
  IconChevronRightComponent,
} from '../../icons';
import { StoryComponent } from '../../system/components/story/story.component';
import { CardContentComponent } from '../card/card-content.component';
import { CardComponent } from '../card/card.component';
import { ReelButtonComponent } from './reel-button.component';
import { ReelContentComponent } from './reel-content.component';
import { ReelItemComponent } from './reel-item.component';
import { ReelNextDirective } from './reel-next.directive';
import { ReelPreviousDirective } from './reel-previous.directive';
import { ReelComponent } from './reel.component';
import { ReelService } from './reel.service';

const meta: Meta<ReelComponent> = {
  title: 'Components/Data Display/Reel',
  component: ReelComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ReelComponent,
        ReelNextDirective,
        ReelPreviousDirective,
        ReelContentComponent,
        ReelButtonComponent,
        ReelItemComponent,
        CardComponent,
        CardContentComponent,
        IconChevronLeftComponent,
        IconChevronRightComponent,
        StoryComponent,
      ],
      providers: [ReelService],
    }),
  ],
  argTypes: {
    // Define any controls for the reel component if needed
  },
};
export default meta;

type Story = StoryObj<ReelComponent>;

export const Default: Story = {
  args: {
    // Add any default args if necessary
  },
  render: (args) => {
    const images = [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=160&h=160&fit=crop',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=160&h=160&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=160&h=160&fit=crop',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=160&h=160&fit=crop',
      'https://images.unsplash.com/photo-1560343090-f0409e92787a?w=160&h=160&fit=crop',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=160&h=160&fit=crop',
      'https://images.unsplash.com/photo-1503602642458-232111445657?w=160&h=160&fit=crop',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=160&h=160&fit=crop',
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=160&h=160&fit=crop',
      'https://images.unsplash.com/photo-1515955656352-a1da3d7d4b90?w=160&h=160&fit=crop',
    ];
    return {
      props: args,
      template: `
    <qui-story>
      <div qui-reel style="width: 300px; height: 200px;">
        <button qui-reel-button puiReelPrevious direction="prev">
          <i qui-icon name="chevron-left" size="md"></i>
        </button>
        <div qui-reel-content>
          ${Array.from({ length: 10 })
            .map(
              (_, index) => `
            <div qui-reel-item>
              <div qui-card style="margin: 0.25rem; height: 100%; overflow: hidden;">
                <img src="${images[index % images.length]}" alt="Product ${
                index + 1
              }" style="width: 100%; height: 100%; object-fit: cover;" />
              </div>
            </div>
          `
            )
            .join('')}
        </div>
        <button qui-reel-button puiReelNext direction="next">
          <i qui-icon name="chevron-right" size="md"></i>
        </button>
      </div>
    </qui-story>
    `,
    };
  },
};

export const Composition: Story = {
  render: () => {
    const images = [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=160&h=160&fit=crop',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=160&h=160&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=160&h=160&fit=crop',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=160&h=160&fit=crop',
      'https://images.unsplash.com/photo-1560343090-f0409e92787a?w=160&h=160&fit=crop',
    ];
    const products = [
      { name: 'Canvas Tote', price: '$24.00' },
      { name: 'Wool Scarf', price: '$38.00' },
      { name: 'Leather Wallet', price: '$52.00' },
      { name: 'Ceramic Mug', price: '$16.00' },
      { name: 'Wireless Earbuds', price: '$89.00' },
    ];
    return {
      template: `
    <qui-story>
      <div style="max-width: var(--spacing-5xl); width: 100%;">
        <h4 style="margin: 0 0 var(--spacing-2);">Recently viewed</h4>
        <div qui-reel style="width: 300px; height: 220px;">
          <button qui-reel-button puiReelPrevious direction="prev">
            <i qui-icon name="chevron-left" size="md"></i>
          </button>
          <div qui-reel-content>
            ${products
              .map(
                (product, index) => `
              <div qui-reel-item>
                <img src="${images[index % images.length]}" alt="${
                  product.name
                }" style="width: 100%; height: 120px; object-fit: cover; border-radius: var(--border-radius-md);" />
                <p style="margin: var(--spacing-1) 0 0; font-size: var(--font-size-sm);">${
                  product.name
                }</p>
                <p style="margin: 0; color: var(--color-muted-fg); font-size: var(--font-size-sm);">${
                  product.price
                }</p>
              </div>
            `
              )
              .join('')}
          </div>
          <button qui-reel-button puiReelNext direction="next">
            <i qui-icon name="chevron-right" size="md"></i>
          </button>
        </div>
      </div>
    </qui-story>
    `,
    };
  },
};
