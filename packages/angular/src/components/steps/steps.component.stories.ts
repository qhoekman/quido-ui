import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

import { ButtonComponent } from '../button/button.component';
import { ButtonGroupComponent } from '../button-group/button-group.component';
import { StackComponent } from '../stack/stack.component';
import { StepsComponent } from './steps.component';
import { StepsListComponent } from './steps-list.component';
import { StepsItemComponent } from './steps-item.component';
import { StepsContentComponent } from './steps-content.component';
import { StepsPrevDirective } from './steps-prev.directive';
import { StepsNextDirective } from './steps-next.directive';
import { StepsCompletedContentComponent } from './steps-completed-content.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<StepsComponent> = {
  title: 'Components/Navigation/Steps',
  component: StepsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ButtonComponent,
        ButtonGroupComponent,
        StackComponent,
        StepsComponent,
        StepsListComponent,
        StepsItemComponent,
        StepsContentComponent,
        StepsPrevDirective,
        StepsNextDirective,
        StepsCompletedContentComponent,
        StoryComponent,
      ],
    }),
  ],
  argTypes: {
    count: {
      control: 'number',
      defaultValue: 3,
    },
  },
};
export default meta;

type Story = StoryObj<StepsComponent>;

export const Default: Story = {
  args: {
    count: 3,
  },
  render: (args) => ({
    props: args,
    template: `
      <pui-story>
        <pui-steps [count]="count">
          <pui-steps-list>
            <pui-steps-item index="0">Step 1</pui-steps-item>
            <pui-steps-item index="1">Step 2</pui-steps-item>
            <pui-steps-item index="2">Step 3</pui-steps-item>
          </pui-steps-list>

          <pui-steps-content index="0">
            Step 1 Content
          </pui-steps-content>
          <pui-steps-content index="1">
            Step 2 Content
          </pui-steps-content>
          <pui-steps-content index="2">
            Step 3 Content
          </pui-steps-content>
          <pui-steps-completed-content>
            All steps completed
          </pui-steps-completed-content>

          <div pui-stack align="center" items="center">
            <div pui-button-group >
              <button pui-button variant="ghost" size="icon" puiStepsPrev>
                &lt;
              </button>
              <button pui-button variant="ghost" size="icon" puiStepsNext>
                &gt;
              </button>
            </div>
          </div>
        </pui-steps>
      </pui-story>
    `,
  }),
};
