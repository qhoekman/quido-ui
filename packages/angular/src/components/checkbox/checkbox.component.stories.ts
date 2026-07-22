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

export const Composition: Story = {
  render: () => ({
    template: `
    <qui-story>
      <div style="display: flex; flex-direction: column; gap: var(--spacing-3); max-width: 280px;">
        <h3 style="margin: 0;">Notification Preferences</h3>
        <div style="display: flex; align-items: center; gap: var(--spacing-2);">
          <button qui-checkbox [checked]="true"></button>
          <label>Email notifications</label>
        </div>
        <div style="display: flex; align-items: center; gap: var(--spacing-2);">
          <button qui-checkbox [checked]="false"></button>
          <label>SMS notifications</label>
        </div>
        <div style="display: flex; align-items: center; gap: var(--spacing-2);">
          <button qui-checkbox [checked]="true"></button>
          <label>Push notifications</label>
        </div>
      </div>
    </qui-story>
    `,
  }),
};
