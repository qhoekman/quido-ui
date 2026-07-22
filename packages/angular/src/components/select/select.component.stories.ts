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
      { value: 'light', label: 'Light' },
      { value: 'dark', label: 'Dark' },
      { value: 'system', label: 'System' },
    ],
  } as never,
  render: (args) => ({
    props: {
      ...args,
      selectedLabel: 'Select a theme',
      onValueChange: function (this: { selectedLabel: string }, option: { label: string }) {
        this.selectedLabel = option.label;
      },
    },
    template: `
    <qui-story>
      <div qui-stack items="center" align="center">
        <qui-select (valueChange)="onValueChange($event)">
          <button qui-select-trigger style="width: 200px;">
            {{ selectedLabel }}
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

export const WithGroups: Story = {
  render: () => ({
    props: {
      selectedLabel: 'Select a fruit',
      onValueChange: function (this: { selectedLabel: string }, option: { label: string }) {
        this.selectedLabel = option.label;
      },
    },
    template: `
    <qui-story>
      <div qui-stack items="center" align="center">
        <qui-select (valueChange)="onValueChange($event)">
          <button qui-select-trigger style="width: 200px;">
            {{ selectedLabel }}
          </button>
          <ul qui-select-content style="width: 200px;">
            <div qui-select-group>
              <div qui-select-label>Fruits</div>
              <li qui-select-item value="apple" label="Apple">Apple</li>
              <li qui-select-item value="banana" label="Banana">Banana</li>
              <li qui-select-item value="orange" label="Orange">Orange</li>
            </div>
            <hr style="border: none; border-top: var(--border-width-default) solid var(--color-border); margin: var(--spacing-1) 0;" />
            <div qui-select-group>
              <div qui-select-label>Vegetables</div>
              <li qui-select-item value="carrot" label="Carrot">Carrot</li>
              <li qui-select-item value="broccoli" label="Broccoli">Broccoli</li>
              <li qui-select-item value="spinach" label="Spinach">Spinach</li>
            </div>
          </ul>
        </qui-select>
      </div>
    </qui-story>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    props: {
      selectedLabel: 'Priority',
      onValueChange: function (this: { selectedLabel: string }, option: { label: string }) {
        this.selectedLabel = option.label;
      },
    },
    template: `
    <qui-story>
      <div style="display: flex; align-items: center; justify-content: space-between; max-width: 20rem;">
        <h3 style="margin: 0;">Sprint Backlog</h3>
        <qui-select (valueChange)="onValueChange($event)">
          <button qui-select-trigger style="width: 10rem;">
            {{ selectedLabel }}
          </button>
          <ul qui-select-content style="width: 10rem;">
            <li qui-select-item value="priority" label="Priority">Priority</li>
            <li qui-select-item value="due-date" label="Due date">Due date</li>
            <li qui-select-item value="assignee" label="Assignee">Assignee</li>
          </ul>
        </qui-select>
      </div>
    </qui-story>
    `,
  }),
};
