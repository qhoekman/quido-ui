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
      { value: 'next', label: 'Next.js' },
      { value: 'sveltekit', label: 'SvelteKit' },
      { value: 'nuxt', label: 'Nuxt.js' },
      { value: 'remix', label: 'Remix' },
      { value: 'astro', label: 'Astro' },
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
              Select a framework
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

export const Composition: Story = {
  render: () => {
    const assignees: ComboboxOption[] = [
      { value: 'jane', label: 'Jane Doe' },
      { value: 'marcus', label: 'Marcus Lee' },
      { value: 'priya', label: 'Priya Nair' },
      { value: 'alex', label: 'Alex Kim' },
    ];
    const filteredOptions = new BehaviorSubject<ComboboxOption[]>(assignees);
    const searchValue = '';
    return {
      props: {
        filteredOptions,
        searchValue,
        onSearchChange: (searchValue: string) => {
          filteredOptions.next(
            assignees.filter((option) =>
              option.label.toLowerCase().includes(searchValue.toLowerCase())
            )
          );
        },
      },
      template: `
      <qui-story>
        <div style="max-width: 320px; display: flex; align-items: center; justify-content: space-between; padding: var(--spacing-3) var(--spacing-4); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-md);">
          <div>
            <div style="font-weight: var(--font-weight-semibold);">Fix login redirect bug</div>
            <div style="color: var(--color-muted-fg); font-size: var(--font-size-sm);">#412 · Bug</div>
          </div>
          <qui-combobox>
            <button qui-combobox-trigger style="width: 160px;">
              Assign to
            </button>
            <div qui-combobox-content style="width: 160px;">
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
