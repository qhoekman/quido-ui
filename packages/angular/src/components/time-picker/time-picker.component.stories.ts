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

export const Composition: Story = {
  render: () => ({
    template: `
      <qui-story>
        <div style="max-width: 280px;">
          <label style="display: block; font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); margin-bottom: var(--spacing-1-5);">Meeting time</label>
          <qui-time-picker></qui-time-picker>
          <p style="margin: var(--spacing-1-5) 0 0; font-size: var(--font-size-sm); color: var(--color-muted-fg);">Shown in your local time zone.</p>
        </div>
      </qui-story>
    `,
  }),
};
