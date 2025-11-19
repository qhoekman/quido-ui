import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { TimePickerComponent } from './time-picker.component';
import { InputComponent } from '../input/input.component';
import { PopoverComponent } from '../popover/popover.component';
import { PopoverTriggerDirective } from '../popover/popover-trigger.directive';
import { TimeSelectComponent } from '../time-select/time-select.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<TimePickerComponent> = {
  title: 'Components/Data Entry/Time Picker',
  component: TimePickerComponent,
  decorators: [
    moduleMetadata({
      imports: [
        InputComponent,
        PopoverComponent,
        PopoverTriggerDirective,
        TimeSelectComponent,
        StoryComponent,
      ],
    }),
  ],
  argTypes: {},
};
export default meta;

type Story = StoryObj<TimePickerComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
    <qui-story>
      <qui-time-picker></qui-time-picker>
    </qui-story>
    `,
  }),
};
