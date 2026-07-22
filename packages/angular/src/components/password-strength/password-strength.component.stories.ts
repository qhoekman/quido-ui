import type { Meta, StoryObj } from '@storybook/angular';

import { PasswordStrengthComponent } from './password-strength.component';

const meta: Meta<PasswordStrengthComponent> = {
  title: 'Components/Feedback/Password Strength',
  component: PasswordStrengthComponent,
  argTypes: {
    value: {
      control: 'text',
      description: 'The password input to evaluate strength',
    },
    requirements: {
      control: 'object',
      description: 'Array of password requirements',
    },
    thresholds: {
      control: 'object',
      description: 'Thresholds for determining strength levels',
    },
  },
};
export default meta;

type Story = StoryObj<PasswordStrengthComponent>;

export const Default: Story = {
  args: {
    value: '',
    requirements: [
      { regex: /.{8,}/, description: 'At least 8 characters' },
      { regex: /[a-z]/, description: 'At least one lowercase letter' },
      { regex: /[A-Z]/, description: 'At least one uppercase letter' },
      { regex: /[0-9]/, description: 'At least one number' },
      { regex: /[^A-Za-z0-9]/, description: 'At least one special character' },
    ],
    thresholds: [2, 4],
  },
  render: (args) => ({
    props: args,
    template: `<div qui-password-strength [value]="value" [requirements]="requirements" [thresholds]="thresholds"></div>`,
  }),
};

export const Weak: Story = {
  args: {
    value: 'weak',
  },
  render: (args) => ({
    props: args,
    template: `<div qui-password-strength [value]="value"></div>`,
  }),
};

export const Medium: Story = {
  args: {
    value: 'Medium123',
  },
  render: (args) => ({
    props: args,
    template: `<div qui-password-strength [value]="value"></div>`,
  }),
};

export const Strong: Story = {
  args: {
    value: 'Strong123!@#',
  },
  render: (args) => ({
    props: args,
    template: `<div qui-password-strength [value]="value"></div>`,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
      <div style="max-width: 400px;">
        <label style="display: block; margin-bottom: var(--spacing-1); font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">Password</label>
        <input
          type="password"
          value="Str0ng!Pass"
          readonly
          style="width: 100%; padding: var(--spacing-2); margin-bottom: var(--spacing-2); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-md);"
        />
        <div qui-password-strength value="Str0ng!Pass"></div>
      </div>
    `,
  }),
};

export const Interactive: Story = {
  render: () => ({
    props: {
      password: '',
      onInput: function (this: { password: string }, event: Event) {
        this.password = (event.target as HTMLInputElement).value;
      },
    },
    template: `
      <div style="max-width: 400px;">
        <input
          type="password"
          placeholder="Enter password"
          (input)="onInput($event)"
          style="width: 100%; padding: var(--spacing-2); margin-bottom: var(--spacing-2); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-md);"
        />
        <div qui-password-strength [value]="password"></div>
      </div>
    `,
  }),
};
