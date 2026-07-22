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
    template: `<qui-story><qui-calendar [currentMonth]="currentMonth" [currentDate]="currentDate"></qui-calendar></qui-story>`,
  }),
};

export const Composition: Story = {
  args: {
    currentMonth: new Date(),
    currentDate: new Date(),
  },
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <div style="max-width: 320px; padding: var(--spacing-6); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
          <h3 style="margin: 0 0 var(--spacing-1);">Schedule a Meeting</h3>
          <p style="margin: 0 0 var(--spacing-4); color: var(--color-muted-fg);">Pick a date for your 30-minute call.</p>
          <qui-calendar [currentMonth]="currentMonth" [currentDate]="currentDate"></qui-calendar>
        </div>
      </qui-story>
    `,
  }),
};
