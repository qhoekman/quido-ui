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
      <pui-story>
        <pui-date-picker [selectedDate]="selectedDate"></pui-date-picker>
      </pui-story>
    `,
  }),
};
