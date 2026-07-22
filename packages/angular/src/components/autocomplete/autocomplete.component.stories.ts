import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import {
  AutocompleteComponent,
  AutocompleteOption,
} from './autocomplete.component';
import { AutocompleteTriggerComponent } from './autocomplete-trigger.component';
import { AutocompleteContentComponent } from './autocomplete-content.component';
import { AutocompleteItemComponent } from './autocomplete-item.component';
import { AutocompleteGroupComponent } from './autocomplete-group.component';
import { AutocompleteLabelComponent } from './autocomplete-label.component';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { StoryComponent } from '../../system/components/story/story.component';

type EnhancedAutocompleteComponent = AutocompleteComponent & {
  searchValue: string;
};

const data = [
  { id: 1, title: 'United States' },
  { id: 2, title: 'Canada' },
  { id: 3, title: 'United Kingdom' },
  { id: 4, title: 'Germany' },
  { id: 5, title: 'France' },
  { id: 6, title: 'Netherlands' },
  { id: 7, title: 'Belgium' },
  { id: 8, title: 'Spain' },
  { id: 9, title: 'Italy' },
  { id: 10, title: 'Portugal' },
  { id: 11, title: 'Sweden' },
  { id: 12, title: 'Norway' },
  { id: 13, title: 'Denmark' },
  { id: 14, title: 'Finland' },
  { id: 15, title: 'Ireland' },
  { id: 16, title: 'Switzerland' },
  { id: 17, title: 'Austria' },
  { id: 18, title: 'Poland' },
  { id: 19, title: 'Japan' },
  { id: 20, title: 'Australia' },
];

const meta: Meta<EnhancedAutocompleteComponent> = {
  title: 'Components/Data Entry/Autocomplete',
  component: AutocompleteComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AutocompleteTriggerComponent,
        AutocompleteContentComponent,
        AutocompleteGroupComponent,
        AutocompleteItemComponent,
        AutocompleteLabelComponent,
        StoryComponent,
        AsyncPipe,
      ],
    }),
  ],
  argTypes: {
    searchValue: {
      control: 'text',
    },
  },
};
export default meta;

type Story = StoryObj<EnhancedAutocompleteComponent>;

export const Default: Story = {
  args: {
    searchValue: '',
  },
  render: (args) => {
    const searchValueSubject = new BehaviorSubject<string>('');
    const optionsSubject = new BehaviorSubject<AutocompleteOption[]>(
      data.map((item) => ({
        value: item.id,
        label: item.title,
      }))
    );
    const handleSearchChange = (value: string) => {
      searchValueSubject.next(value);
    };
    searchValueSubject.subscribe((value) => {
      const filteredOptions = data.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      optionsSubject.next(
        filteredOptions.map((item) => ({
          value: item.id,
          label: item.title,
        }))
      );
    });

    return {
      props: {
        ...args,
        options$: optionsSubject.asObservable(),
        searchValue: searchValueSubject.value,
        onSearchChange: handleSearchChange,
      },
      template: `
      <qui-story>
        <qui-autocomplete>
          <div qui-autocomplete-trigger [searchValue]="searchValue" (valueChange)="onSearchChange($event)"></div>
          <div qui-autocomplete-content>
            <ul qui-autocomplete-group>
              <li qui-autocomplete-item *ngFor="let option of options$ | async" [value]="option.value" [label]="option.label">
                {{ option.label }}
              </li>
            </ul>
          </div>
        </qui-autocomplete>
      </qui-story>
      `,
    };
  },
};

export const Composition: Story = {
  render: () => {
    const searchValueSubject = new BehaviorSubject<string>('');
    const optionsSubject = new BehaviorSubject<AutocompleteOption[]>(
      data.map((item) => ({
        value: item.id,
        label: item.title,
      }))
    );
    const handleSearchChange = (value: string) => {
      searchValueSubject.next(value);
    };
    searchValueSubject.subscribe((value) => {
      const filteredOptions = data.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      optionsSubject.next(
        filteredOptions.map((item) => ({
          value: item.id,
          label: item.title,
        }))
      );
    });

    return {
      props: {
        options$: optionsSubject.asObservable(),
        searchValue: searchValueSubject.value,
        onSearchChange: handleSearchChange,
      },
      template: `
      <qui-story>
        <div style="max-width: 320px;">
          <label style="display: block; font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); margin-bottom: var(--spacing-1-5);">Country</label>
          <qui-autocomplete>
            <div qui-autocomplete-trigger [searchValue]="searchValue" (valueChange)="onSearchChange($event)"></div>
            <div qui-autocomplete-content>
              <ul qui-autocomplete-group>
                <li qui-autocomplete-item *ngFor="let option of options$ | async" [value]="option.value" [label]="option.label">
                  {{ option.label }}
                </li>
              </ul>
            </div>
          </qui-autocomplete>
          <p style="margin: var(--spacing-1-5) 0 0; font-size: var(--font-size-sm); color: var(--color-muted-fg);">Used for billing address and tax calculation.</p>
        </div>
      </qui-story>
      `,
    };
  },
};
