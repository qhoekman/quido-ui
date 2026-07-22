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
    <qui-story>
      <qui-time-select [hours]="hours" [minutes]="minutes"></qui-time-select>
    </qui-story>
    `,
  }),
};

export const Composition: Story = {
  args: {
    hours: '09',
    minutes: '30',
  },
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <div style="max-width: 280px;">
          <label style="display: block; font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); margin-bottom: var(--spacing-1-5);">Reminder time</label>
          <qui-time-select [hours]="hours" [minutes]="minutes"></qui-time-select>
          <p style="margin: var(--spacing-1-5) 0 0; font-size: var(--font-size-sm); color: var(--color-muted-fg);">We'll notify you at this time each day.</p>
        </div>
      </qui-story>
    `,
  }),
};
