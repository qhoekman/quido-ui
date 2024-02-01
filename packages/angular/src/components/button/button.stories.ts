import { ButtonComponent } from '@/components/button/button';
import type { Meta, StoryObj } from '@storybook/angular';

type Story = StoryObj<ButtonComponent>;

const meta: Meta<ButtonComponent> = {
  title: 'Components/Actions/Button',
  component: ButtonComponent,
  args: {
    variant: 'default',
    size: 'default',
    type: 'button',
    disabled: false,
  },
  render: (args: ButtonComponent) => ({
    props: args,
    template: `<q-button
      [type]="type"
      [disabled]="disabled"
      [variant]="variant"
      [size]="size"
    >Button</q-button>`,
  }),
};

export const Default: Story = {};

export default meta;
