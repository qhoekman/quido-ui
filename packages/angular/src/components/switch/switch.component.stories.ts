import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { SwitchComponent } from './switch.component';
import { StackComponent } from '../stack/stack.component';
import { LabelComponent } from '../label/label.component';
import { StoryComponent } from '../../system/components/story/story.component';

type EnhancedSwitchComponent = SwitchComponent & {
  label: string;
};

const meta: Meta<EnhancedSwitchComponent> = {
  title: 'Components/Data Entry/Switch',
  component: SwitchComponent,
  decorators: [
    moduleMetadata({
      imports: [
        SwitchComponent,
        StackComponent,
        LabelComponent,
        StoryComponent,
      ],
    }),
  ],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
  } as never,
};
export default meta;

type Story = StoryObj<EnhancedSwitchComponent>;

export const Default: Story = {
  args: {
    checked: false,
    label: 'Enable notifications',
  } as never,
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <div qui-stack align="center" justify="center" gap="sm">
          <button id="switch" qui-switch [checked]="checked"></button>
          <label qui-label for="switch">{{ label }}</label>
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
          <h3 style="margin: 0;">Settings</h3>
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <label qui-label for="dark-mode">Dark mode</label>
            <button id="dark-mode" qui-switch [checked]="true"></button>
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <label qui-label for="email-updates">Email updates</label>
            <button id="email-updates" qui-switch [checked]="false"></button>
          </div>
        </div>
      </qui-story>
    `,
  }),
};
