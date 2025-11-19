import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { LabelComponent } from '../label/label.component';
import { StackComponent } from '../stack/stack.component';
import { InputComponent } from './input.component';
import { StoryComponent } from '../../system/components/story/story.component';

type EnhancedInputComponent = InputComponent & {
  type: string;
  placeholder: string;
  disabled: boolean;
};

const meta: Meta<EnhancedInputComponent> = {
  title: 'Components/Data Entry/Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [LabelComponent, StackComponent, StoryComponent],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: 'select',
      options: [
        'date',
        'datetime-local',
        'email',
        'file',
        'month',
        'number',
        'password',
        'text',
        'time',
      ],
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
};
export default meta;

type Story = StoryObj<EnhancedInputComponent>;

export const Default: Story = {
  args: {
    size: 'md',
    placeholder: 'Enter text...',
    type: 'text',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <div qui-stack direction="column" gap="sm" style="max-width: var(--breakpoint-xs);">
          <label qui-label [size]="size">Label</label>
          <input qui-input [size]="size" [placeholder]="placeholder" [type]="type" [disabled]="disabled" />
        </div>
      </qui-story>
    `,
  }),
};
