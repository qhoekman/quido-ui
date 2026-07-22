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
      <div qui-stack items="center" align="center">
        <qui-popover [popoverContent]="popoverContent">
          <button qui-button puiPopoverTrigger>Popover</button>
          <ng-template #popoverContent>
            <div qui-popover-content>
              <qui-popover-indicator></qui-popover-indicator>
              <span>Popover content goes here!</span>
            </div>
          </ng-template>
        </qui-popover>
      </div>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
      <div qui-stack items="center" align="center">
        <qui-popover [popoverContent]="popoverContent">
          <button qui-button variant="outline" size="sm" puiPopoverTrigger>Share</button>
          <ng-template #popoverContent>
            <div qui-popover-content style="width: 280px;">
              <qui-popover-indicator></qui-popover-indicator>
              <p style="margin: 0 0 var(--spacing-2); font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">Share this document</p>
              <div style="display: flex; gap: var(--spacing-2);">
                <input
                  readonly
                  value="https://pulse.quido.online/d/8f3k2"
                  style="flex: 1; min-width: 0; padding: var(--spacing-2); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-md); font-size: var(--font-size-sm);"
                />
                <button qui-button size="sm">Copy</button>
              </div>
            </div>
          </ng-template>
        </qui-popover>
      </div>
    `,
  }),
};
