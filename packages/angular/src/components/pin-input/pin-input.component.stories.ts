import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { PinInputComponent } from './pin-input.component';
import { StoryComponent } from '../../system/components/story/story.component';

type EnhancedPinInputComponent = PinInputComponent & {
  length: number;
  size: string;
};

const meta: Meta<EnhancedPinInputComponent> = {
  title: 'Components/Data Entry/Pin Input',
  component: PinInputComponent,
  decorators: [
    moduleMetadata({
      imports: [PinInputComponent, StoryComponent],
    }),
  ],
  argTypes: {
    length: {
      control: 'number',
      defaultValue: 4,
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};
export default meta;

type Story = StoryObj<EnhancedPinInputComponent>;

export const Default: Story = {
  args: {
    length: 4,
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <qui-pin-input [length]="length" [size]="size"></qui-pin-input>
      </qui-story>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
      <qui-story>
        <div style="max-width: 280px; padding: var(--spacing-6); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg); text-align: center;">
          <h3 style="margin: 0 0 var(--spacing-1);">Verify your email</h3>
          <p style="margin: 0 0 var(--spacing-4); color: var(--color-muted-fg);">Enter the 4-digit code we sent to jane@company.com.</p>
          <qui-pin-input [length]="4"></qui-pin-input>
        </div>
      </qui-story>
    `,
  }),
};
