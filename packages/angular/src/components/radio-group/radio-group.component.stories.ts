import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { RadioGroupComponent } from './radio-group.component';
import { LabelComponent } from '../label/label.component';
import { StackComponent } from '../stack/stack.component';
import { RadioGroupItemComponent } from './radio-group-item.component';
import { StoryComponent } from '../../system/components/story/story.component';
type EnhancedRadioGroupComponent = RadioGroupComponent & {
  items: { label: string; checked: boolean }[];
};

const meta: Meta<EnhancedRadioGroupComponent> = {
  title: 'Components/Data Entry/Radio Group',
  component: RadioGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [
        RadioGroupComponent,
        RadioGroupItemComponent,
        StackComponent,
        LabelComponent,
        StoryComponent,
      ],
    }),
  ],
  argTypes: {
    required: {
      control: 'boolean',
    },
    items: {
      control: 'object',
    },
  } as never,
};
export default meta;

type Story = StoryObj<EnhancedRadioGroupComponent>;

export const Default: Story = {
  args: {
    required: false,
    items: [
      { label: 'Credit card', value: 'option1', checked: true },
      { label: 'PayPal', value: 'option2', checked: false },
    ],
  } as never,
  render: (args) => ({
    props: args,
    template: `
    <qui-story>
      <div qui-radio-group>
        <div qui-stack align="center" gap="sm"  *ngFor="let item of items">
          <button [id]="item.value" qui-radio-group-item [checked]="item.checked" [value]="item.value"></button>
          <label qui-label [for]="item.value">{{ item.label }}</label>
        </div>
      </div>
    </qui-story>
    `,
  }),
};

export const Composition: Story = {
  args: {
    items: [
      { label: 'Daily', value: 'daily', checked: false },
      { label: 'Weekly', value: 'weekly', checked: true },
      { label: 'Never', value: 'never', checked: false },
    ],
  } as never,
  render: (args) => ({
    props: args,
    template: `
    <qui-story>
      <div style="max-width: 18rem;">
        <h3 style="margin: 0 0 var(--spacing-1);">Notification Frequency</h3>
        <p style="margin: 0 0 var(--spacing-4); color: var(--color-muted-fg); font-size: var(--font-size-sm);">How often should we email you a digest?</p>
        <div qui-radio-group>
          <div qui-stack align="center" gap="sm" *ngFor="let item of items">
            <button [id]="item.value" qui-radio-group-item [checked]="item.checked" [value]="item.value"></button>
            <label qui-label [for]="item.value">{{ item.label }}</label>
          </div>
        </div>
      </div>
    </qui-story>
    `,
  }),
};
