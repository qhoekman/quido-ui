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
      imports: [SwitchComponent, StackComponent, LabelComponent, StoryComponent],
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
      <pui-story>
        <div pui-stack align="center" justify="center" gap="sm">
          <button id="switch" pui-switch [checked]="checked"></button>
          <label pui-label for="switch">{{ label }}</label>
        </div>
      </pui-story>
    `,
  }),
};
