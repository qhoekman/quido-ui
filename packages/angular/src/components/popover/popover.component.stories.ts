import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../button/button.component';
import { PopoverContentComponent } from './popover-content.component';
import { PopoverTriggerDirective } from './popover-trigger.directive';
import { PopoverComponent } from './popover.component';
import { PopoverIndicatorComponent } from './popover-indicator.component';
import { StackComponent } from '../stack/stack.component';

const meta: Meta<PopoverComponent> = {
  title: 'Components/Overlay/Popover',
  component: PopoverComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ButtonComponent,
        PopoverComponent,
        PopoverContentComponent,
        PopoverTriggerDirective,
        PopoverIndicatorComponent,
        StackComponent,
      ],
    }),
  ],
  argTypes: {
    // Define any controls for the popover component if needed
  },
};
export default meta;

type Story = StoryObj<PopoverComponent>;

export const Default: Story = {
  args: {
    // Add any default args if necessary
  },
  render: (args) => ({
    props: args,
    template: `
      <div pui-stack items="center" align="center">
        <pui-popover [popoverContent]="popoverContent">
          <button pui-button puiPopoverTrigger>Popover</button>
          <ng-template #popoverContent>
            <div pui-popover-content>
              <pui-popover-indicator></pui-popover-indicator>
              <span>Popover content goes here!</span>
            </div>
          </ng-template>
        </pui-popover>
      </div>
    `,
  }),
};
