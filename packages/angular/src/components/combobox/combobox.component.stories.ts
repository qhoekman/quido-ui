import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { StackComponent } from '../stack/stack.component';
import { ComboboxComponent, ComboboxOption } from './combobox.component';
import { ComboboxItemComponent } from './combobox-item.component';
import { ComboboxLabelComponent } from './combobox-label.component';
import { ComboboxTriggerComponent } from './combobox-trigger.component';
import { ComboboxContentComponent } from './combobox-content.component';
import { ComboboxSearchboxComponent } from './combobox-searchbox.component';
import { ComboboxGroupComponent } from './combobox-group.component';
import { BehaviorSubject } from 'rxjs';
import { InputComponent } from '../input/input.component';
import { FormsModule } from '@angular/forms';
import { ComboboxSearchComponent } from './combobox-search.component';
import { StoryComponent } from '../../system/components/story/story.component';

type EnhancedComboboxComponent = ComboboxComponent & {
  options: { value: string; label: string }[];
};

const meta: Meta<EnhancedComboboxComponent> = {
  title: 'Components/Data Entry/Combobox',
  component: ComboboxComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ComboboxComponent,
        ComboboxTriggerComponent,
        ComboboxContentComponent,
        ComboboxItemComponent,
        ComboboxGroupComponent,
        ComboboxLabelComponent,
        ComboboxSearchboxComponent,
        ComboboxSearchComponent,
        InputComponent,
        FormsModule,
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

type Story = StoryObj<EnhancedComboboxComponent>;

export const Default: Story = {
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  } as never,
  render: (args) => {
    const filteredOptions = new BehaviorSubject<ComboboxOption[]>(args.options);
    const searchValue = '';
    return {
      props: {
        ...args,
        filteredOptions,
        searchValue,
        onSearchChange: (searchValue: string) => {
          filteredOptions.next(
            args.options.filter((option) =>
              option.label.toLowerCase().includes(searchValue.toLowerCase())
            )
          );
        },
        onKeydown: (event: KeyboardEvent) => {
          event.stopPropagation();
        },
      },
      template: `
      <qui-story>
        <div qui-stack items="center" align="center">
          <qui-combobox>
            <button qui-combobox-trigger style="width: 200px;">
              Select an option
            </button>
            <div qui-combobox-content style="width: 200px; ">
              <div qui-combobox-searchbox>
                <input qui-combobox-search [(ngModel)]="searchValue" (ngModelChange)="onSearchChange($event)"/>
              </div>
              <ul qui-combobox-group>
                <li
                  qui-combobox-item
                  *ngFor="let option of filteredOptions | async"
                  [value]="option.value"
                  [label]="option.label"
                >
                  {{ option.label }}
                </li>
              </ul>
            </div>
          </qui-combobox>
        </div>
      </qui-story>
      `,
    };
  },
};
