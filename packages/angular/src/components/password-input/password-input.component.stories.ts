import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { PasswordInputComponent } from './password-input.component';
import { PasswordInputFieldComponent } from './password-inputfield.component';
import { StoryComponent } from '../../system/components/story/story.component';

type EnhancedPasswordInputComponent = PasswordInputComponent & {
  placeholder: string;
  disabled: boolean;
  required: boolean;
  size: 'sm' | 'md' | 'lg';
};

const meta: Meta<EnhancedPasswordInputComponent> = {
  title: 'Components/Data Entry/Password Input',
  component: PasswordInputFieldComponent,
  decorators: [
    moduleMetadata({
      imports: [PasswordInputFieldComponent, PasswordInputComponent, StoryComponent],
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

type Story = StoryObj<EnhancedPasswordInputComponent>;

export const Default: Story = {
  args: {
    placeholder: 'Enter password',
    disabled: false,
    required: false,
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `
      <pui-story>
        <pui-password-inputfield><input pui-password-input [placeholder]="placeholder" [disabled]="disabled" [required]="required" [size]="size" /></pui-password-inputfield>
      </pui-story>
    `,
  }),
};
