import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../button/button.component';
import { TooltipContentComponent } from './tooltip-content.component';
import { TooltipComponent } from './tooltip.component';
import { TooltipTriggerDirective } from './tooltip-trigger.directive';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<TooltipComponent> = {
  title: 'Components/Overlay/Tooltip',
  component: TooltipComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent, TooltipComponent, TooltipContentComponent, TooltipTriggerDirective, StoryComponent],
    }),
  ],
  argTypes: {},
};
export default meta;

type Story = StoryObj<TooltipComponent>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
    <pui-story>
      <div pui-tooltip strategy="always">
        <button pui-button pui-tooltip-trigger [tooltipContentFor]="tooltipConfirm">
          Tooltip
        </button>
        <ng-template #tooltipConfirm>
          <div pui-tooltip-content>
            <span>Are you sure?</span>
          </div>
        </ng-template>
      </div>
    </pui-story>
    `,
  }),
};
