import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { IconCaretSortComponent } from '../../icons';
import { ButtonComponent } from '../button/button.component';
import { CollapsibleTriggerComponent } from './collapsible-trigger.component';
import { CollapsibleComponent } from './collapsible.component';
import { CollapsibleContentComponent } from './collapsible-content.component';
import { StoryComponent } from '../../system/components/story/story.component';
const meta: Meta<CollapsibleComponent> = {
  title: 'Components/Disclosure/Collapsible',
  component: CollapsibleComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ButtonComponent,
        CollapsibleTriggerComponent,
        CollapsibleContentComponent,
        IconCaretSortComponent,
        StoryComponent,
      ],
    }),
  ],
  argTypes: {
    expanded: {
      control: 'boolean',
    },
  },
};
export default meta;

type Story = StoryObj<CollapsibleComponent>;

export const Default: Story = {
  args: {
    expanded: false,
  },
  render: (args) => ({
    props: args,
    template: `
    <pui-story>
      <div pui-collapsible #collapsible [expanded]="expanded" style="max-width: var(--breakpoint-xs);">
        <button pui-collapsible-trigger (click)="collapsible.toggle()">
          <span>Recipe list</span>
          <i pui-icon name="caret-sort" size="sm"></i>
        </button>
        <ng-template #content>
          <div pui-collapsible-content>
            <p>The recipe list is empty.</p>
          </div>
        </ng-template>
      </div>
    </pui-story>
    `,
  }),
};
