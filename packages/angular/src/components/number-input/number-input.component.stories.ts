import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { NumberInputComponent } from './number-input.component';
import { NumberInputFieldComponent } from './number-inputfield.component';
import { StoryComponent } from '../../system/components/story/story.component';

type EnhancedNumberInputComponent = NumberInputComponent & {
  placeholder: string;
  disabled: boolean;
  required: boolean;
};

const meta: Meta<EnhancedNumberInputComponent> = {
  title: 'Components/Data Entry/Number Input',
  component: NumberInputComponent,
  decorators: [
    moduleMetadata({
      imports: [NumberInputComponent, NumberInputFieldComponent, StoryComponent],
    }),
  ],
  argTypes: {
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};
export default meta;

type Story = StoryObj<EnhancedNumberInputComponent>;

export const Default: Story = {
  args: {
    placeholder: '0',
    disabled: false,
    required: false,
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `
      <pui-story>
        <pui-number-inputfield [size]="size">
          <input pui-number-input [placeholder]="placeholder" [disabled]="disabled" [required]="required" />
        </pui-number-inputfield>
      </pui-story>
    `,
  }),
};
