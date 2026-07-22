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
      imports: [
        ButtonComponent,
        TooltipComponent,
        TooltipContentComponent,
        TooltipTriggerDirective,
        StoryComponent,
      ],
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
    <qui-story>
      <div qui-tooltip strategy="always">
        <button qui-button qui-tooltip-trigger [tooltipContentFor]="tooltipConfirm">
          Tooltip
        </button>
        <ng-template #tooltipConfirm>
          <div qui-tooltip-content>
            <span>Are you sure?</span>
          </div>
        </ng-template>
      </div>
    </qui-story>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
    <qui-story>
      <div style="display: flex; gap: var(--spacing-1);">
        <div qui-tooltip strategy="always">
          <button qui-button variant="ghost" size="icon" qui-tooltip-trigger [tooltipContentFor]="tooltipBold">B</button>
          <ng-template #tooltipBold>
            <div qui-tooltip-content>
              <span>Bold</span>
            </div>
          </ng-template>
        </div>
        <div qui-tooltip strategy="always">
          <button qui-button variant="ghost" size="icon" qui-tooltip-trigger [tooltipContentFor]="tooltipItalic">I</button>
          <ng-template #tooltipItalic>
            <div qui-tooltip-content>
              <span>Italic</span>
            </div>
          </ng-template>
        </div>
        <div qui-tooltip strategy="always">
          <button qui-button variant="ghost" size="icon" qui-tooltip-trigger [tooltipContentFor]="tooltipUnderline">U</button>
          <ng-template #tooltipUnderline>
            <div qui-tooltip-content>
              <span>Underline</span>
            </div>
          </ng-template>
        </div>
      </div>
    </qui-story>
    `,
  }),
};
