import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { PinInputComponent } from './pin-input.component';
import { StoryComponent } from '../../system/components/story/story.component';

type EnhancedPinInputComponent = PinInputComponent & {
  length: number;
  size: string;
};

const meta: Meta<EnhancedPinInputComponent> = {
  title: 'Components/Data Entry/Pin Input',
  component: PinInputComponent,
  decorators: [
    moduleMetadata({
      imports: [PinInputComponent, StoryComponent],
    }),
  ],
  argTypes: {
    length: {
      control: 'number',
      defaultValue: 4,
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};
export default meta;

type Story = StoryObj<EnhancedPinInputComponent>;

export const Default: Story = {
  args: {
    length: 4,
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `
      <pui-story>
        <pui-pin-input [length]="length" [size]="size"></pui-pin-input>
      </pui-story>
    `,
  }),
};
