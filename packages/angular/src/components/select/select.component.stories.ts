import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { StackComponent } from '../stack/stack.component';
import { SelectContentComponent } from './select-content.component';
import { SelectGroupComponent } from './select-group.component';
import { SelectItemComponent } from './select-item.component';
import { SelectLabelComponent } from './select-label.component';
import { SelectTriggerComponent } from './select-trigger.component';
import { SelectComponent } from './select.component';
import { StoryComponent } from '../../system/components/story/story.component';

type EnhancedSelectComponent = SelectComponent & {
  options: { value: string; label: string }[];
};

const meta: Meta<EnhancedSelectComponent> = {
  title: 'Components/Data Entry/Select',
  component: SelectComponent,
  decorators: [
    moduleMetadata({
      imports: [
        SelectComponent,
        SelectTriggerComponent,
        SelectContentComponent,
        SelectItemComponent,
        SelectGroupComponent,
        SelectLabelComponent,
        StackComponent,
        StoryComponent,
      ],
    }),
  ],
  argTypes: {
    options: {
      control: 'object',
    },
  } as never,
};
export default meta;

type Story = StoryObj<EnhancedSelectComponent>;

export const Default: Story = {
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  } as never,
  render: (args) => ({
    props: args,
    template: `
    <qui-story>
      <div qui-stack items="center" align="center">
        <qui-select>
          <button qui-select-trigger style="width: 200px;">
            Select an option
          </button>
          <ul qui-select-content style="width: 200px; ">
             <li
                qui-select-item
                *ngFor="let option of options"
                [value]="option.value"
                [label]="option.label"
              >
                {{ option.label }}
              </li>
          </ul>
        </qui-select>
      </div>
    </qui-story>
    `,
  }),
};
