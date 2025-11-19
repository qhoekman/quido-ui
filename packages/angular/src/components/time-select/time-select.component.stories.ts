import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TimeSelectComponent } from './time-select.component';
import { StoryComponent } from '../../system/components/story/story.component';

type EnhancedTimeSelectComponent = TimeSelectComponent & {
  selectedHour: string;
  selectedMinute: string;
};

const meta: Meta<EnhancedTimeSelectComponent> = {
  title: 'Components/Data Entry/Time Select',
  component: TimeSelectComponent,
  decorators: [
    moduleMetadata({
      imports: [StoryComponent],
    }),
  ],
  argTypes: {
    hours: {
      control: 'text',
    },
    minutes: {
      control: 'text',
    },
  },
};
export default meta;

type Story = StoryObj<EnhancedTimeSelectComponent>;

export const Default: Story = {
  args: {
    hours: '12',
    minutes: '08',
  },
  render: (args) => ({
    props: args,
    template: `
    <pui-story>
      <pui-time-select [hours]="hours" [minutes]="minutes"></pui-time-select>
    </pui-story>
    `,
  }),
};
