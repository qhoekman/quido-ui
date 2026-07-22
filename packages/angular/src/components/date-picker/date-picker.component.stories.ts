import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { DatePickerComponent } from './date-picker.component';
import { StoryComponent } from '../../system/components/story/story.component';

type EnhancedDatePickerComponent = DatePickerComponent & {
  selectedDate: Date;
};

const meta: Meta<EnhancedDatePickerComponent> = {
  title: 'Components/Data Entry/Date Picker',
  component: DatePickerComponent,
  decorators: [
    moduleMetadata({
      imports: [StoryComponent],
    }),
  ],
  argTypes: {
    selectedDate: {
      control: 'date',
    },
  },
};
export default meta;

type Story = StoryObj<EnhancedDatePickerComponent>;

export const Default: Story = {
  args: {
    selectedDate: new Date(),
  },
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <qui-date-picker [selectedDate]="selectedDate"></qui-date-picker>
      </qui-story>
    `,
  }),
};

export const Composition: Story = {
  args: {
    selectedDate: new Date(),
  },
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <div style="max-width: 280px;">
          <label style="display: block; font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); margin-bottom: var(--spacing-1-5);">Due date</label>
          <qui-date-picker [selectedDate]="selectedDate"></qui-date-picker>
          <p style="margin: var(--spacing-1-5) 0 0; font-size: var(--font-size-sm); color: var(--color-muted-fg);">Task will be marked overdue after this date.</p>
        </div>
      </qui-story>
    `,
  }),
};
