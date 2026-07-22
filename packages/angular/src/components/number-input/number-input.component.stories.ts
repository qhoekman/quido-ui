import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { NumberInputComponent } from './number-input.component';
import { NumberInputFieldComponent } from './number-inputfield.component';
import { StoryComponent } from '../../system/components/story/story.component';

type EnhancedNumberInputComponent = NumberInputComponent & {
  placeholder: string;
  disabled: boolean;
  required: boolean;
};

const meta: Meta<EnhancedNumberInputComponent> = {
  title: 'Components/Data Entry/Number Input',
  component: NumberInputComponent,
  decorators: [
    moduleMetadata({
      imports: [
        NumberInputComponent,
        NumberInputFieldComponent,
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

type Story = StoryObj<EnhancedNumberInputComponent>;

export const Default: Story = {
  args: {
    placeholder: '0',
    disabled: false,
    required: false,
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <qui-number-inputfield [size]="size">
          <input qui-number-input [placeholder]="placeholder" [disabled]="disabled" [required]="required" />
        </qui-number-inputfield>
      </qui-story>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
      <qui-story>
        <div style="display: flex; align-items: center; justify-content: space-between; max-width: 20rem; padding: var(--spacing-4); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg); box-sizing: border-box;">
          <div>
            <h4 style="margin: 0 0 var(--spacing-1); font-size: var(--font-size-sm);">Classic Tee</h4>
            <p style="margin: 0; color: var(--color-muted-fg); font-size: var(--font-size-sm);">$28.00</p>
          </div>
          <qui-number-inputfield size="md">
            <input qui-number-input value="2" min="1" max="10" />
          </qui-number-inputfield>
        </div>
      </qui-story>
    `,
  }),
};
