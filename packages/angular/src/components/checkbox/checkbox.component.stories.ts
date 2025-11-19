import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { CheckboxComponent } from './checkbox.component';
import { StackComponent } from '../stack/stack.component';
import { StoryComponent } from '../../system/components/story/story.component';

type EnhancedCheckboxComponent = CheckboxComponent & {
  label: string;
  checked: boolean;
  disabled: boolean;
};

const meta: Meta<EnhancedCheckboxComponent> = {
  title: 'Components/Data Entry/Checkbox',
  component: CheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [CheckboxComponent, StackComponent, StoryComponent],
    }),
  ],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
  },
};
export default meta;

type Story = StoryObj<EnhancedCheckboxComponent>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    label: 'Accept terms and conditions',
  },
  render: (args) => ({
    props: args,
    template: `
    <qui-story>
      <div qui-stack align="center" justify="center" gap="sm">
        <button qui-checkbox [checked]="checked" [disabled]="disabled"></button>
        <label>{{ label }}</label>
      </div>
    </qui-story>
    `,
  }),
};
