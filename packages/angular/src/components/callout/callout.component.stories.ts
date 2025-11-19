import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { IconInfoCircledComponent } from '../../icons';
import { StoryComponent } from '../../system/components/story/story.component';
import { CalloutDescriptionComponent } from './callout-description.component';
import { CalloutIndicatorComponent } from './callout-indicator.component';
import { CalloutTitleComponent } from './callout-title.component';
import { CalloutComponent } from './callout.component';

const meta: Meta<CalloutComponent> = {
  title: 'Components/Feedback/Callout',
  component: CalloutComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CalloutTitleComponent,
        CalloutDescriptionComponent,
        CalloutIndicatorComponent,
        IconInfoCircledComponent,
        StoryComponent,
      ],
    }),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
    },
  },
};
export default meta;

type Story = StoryObj<CalloutComponent>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => ({
    props: args,
    template: `
    <pui-story>
      <div pui-callout [variant]="variant" style="max-width: var(--breakpoint-md);">
        <div pui-callout-indicator>
          <i pui-icon name="info-circled" size="lg"></i>
        </div>
        <h5 pui-callout-title>Callout Title</h5>
        <div pui-callout-description>
          <p>This is a description inside the callout component.</p>
        </div>
      </div>
    </pui-story>
    `,
  }),
};
