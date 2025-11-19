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
  render: (args) => ({
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
              <div qui-card style="margin: 0.25rem; height: 100%;">
                <div qui-card-content style="padding: 1.5rem;">
                  <span style="font-size: 1.5rem; font-weight: 600;">${
                    index + 1
                  }</span>
                </div>
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
  }),
};
