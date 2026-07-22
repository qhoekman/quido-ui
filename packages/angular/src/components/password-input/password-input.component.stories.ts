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
      imports: [
        PasswordInputFieldComponent,
        PasswordInputComponent,
        StoryComponent,
      ],
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
      <qui-story>
        <qui-password-inputfield><input qui-password-input [placeholder]="placeholder" [disabled]="disabled" [required]="required" [size]="size" /></qui-password-inputfield>
      </qui-story>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
      <qui-story>
        <div style="max-width: var(--spacing-64);">
          <label for="password" style="display: block; font-size: var(--font-size-sm); font-weight: var(--font-weight-semibold); margin-bottom: var(--spacing-1-5);">Password</label>
          <qui-password-inputfield><input qui-password-input id="password" placeholder="Enter password" /></qui-password-inputfield>
          <p style="margin: var(--spacing-1-5) 0 0; font-size: var(--font-size-sm); color: var(--color-muted-fg);">Must be at least 8 characters.</p>
        </div>
      </qui-story>
    `,
  }),
};
