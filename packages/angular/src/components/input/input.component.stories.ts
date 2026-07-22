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
    placeholder: 'Enter your name',
    type: 'text',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <div qui-stack direction="column" gap="sm" style="max-width: var(--breakpoint-xs);">
          <label qui-label [size]="size">Name</label>
          <input qui-input [size]="size" [placeholder]="placeholder" [type]="type" [disabled]="disabled" />
        </div>
      </qui-story>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
      <qui-story>
        <div style="max-width: var(--spacing-64);">
          <label qui-label for="email">Email address</label>
          <input qui-input id="email" type="email" placeholder="you@company.com" style="margin-top: var(--spacing-1-5); width: 100%;" />
          <p style="margin: var(--spacing-1-5) 0 0; font-size: var(--font-size-sm); color: var(--color-muted-fg);">We'll send a confirmation link to this address.</p>
        </div>
      </qui-story>
    `,
  }),
};
