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
    template: `<div pui-password-strength [value]="value" [requirements]="requirements" [thresholds]="thresholds"></div>`,
  }),
};
