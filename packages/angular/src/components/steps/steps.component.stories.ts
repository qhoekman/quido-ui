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
      <qui-story>
        <qui-steps [count]="count">
          <qui-steps-list>
            <qui-steps-item index="0">Step 1</qui-steps-item>
            <qui-steps-item index="1">Step 2</qui-steps-item>
            <qui-steps-item index="2">Step 3</qui-steps-item>
          </qui-steps-list>

          <qui-steps-content index="0">
            Step 1 Content
          </qui-steps-content>
          <qui-steps-content index="1">
            Step 2 Content
          </qui-steps-content>
          <qui-steps-content index="2">
            Step 3 Content
          </qui-steps-content>
          <qui-steps-completed-content>
            All steps completed
          </qui-steps-completed-content>

          <div qui-stack align="center" items="center">
            <div qui-button-group >
              <button qui-button variant="ghost" size="icon" puiStepsPrev>
                &lt;
              </button>
              <button qui-button variant="ghost" size="icon" puiStepsNext>
                &gt;
              </button>
            </div>
          </div>
        </qui-steps>
      </qui-story>
    `,
  }),
};
