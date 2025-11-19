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
      { label: 'Option 1', value: 'option1', checked: true },
      { label: 'Option 2', value: 'option2', checked: false },
      { label: 'Option 3', value: 'option3', checked: false },
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
