import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { CalendarComponent } from './calendar.component';
import { StoryComponent } from '../../system/components/story/story.component';

type EnhancedCalendarComponent = CalendarComponent & {
  currentMonth: Date;
};

const meta: Meta<EnhancedCalendarComponent> = {
  title: 'Components/Data Entry/Calendar',
  component: CalendarComponent,
  decorators: [
    moduleMetadata({
      imports: [StoryComponent],
    }),
  ],
  argTypes: {
    currentMonth: {
      control: 'date',
    },
    currentDate: {
      control: 'date',
    },
  },
};
export default meta;

type Story = StoryObj<EnhancedCalendarComponent>;

export const Default: Story = {
  args: {
    currentMonth: new Date(),
    currentDate: new Date(),
  },
  render: (args) => ({
    props: args,
    template: `<pui-story><pui-calendar [currentMonth]="currentMonth" [currentDate]="currentDate"></pui-calendar></pui-story>`,
  }),
};
