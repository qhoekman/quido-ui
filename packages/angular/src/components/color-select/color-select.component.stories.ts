import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { ColorSelectComponent } from './color-select.component';
import { ColorSelectItemComponent } from './color-select-item.component';
import { StackComponent } from '../stack/stack.component';
import { StoryComponent } from '../../system/components/story/story.component';

type EnhancedColorSelectComponent = ColorSelectComponent & {
  items: { color: string; checked: boolean }[];
};

const meta: Meta<EnhancedColorSelectComponent> = {
  title: 'Components/Data Entry/Color Select',
  component: ColorSelectComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ColorSelectComponent,
        ColorSelectItemComponent,
        StackComponent,
        StoryComponent,
      ],
    }),
  ],
  argTypes: {
    items: {
      control: 'object',
    },
  } as never,
};
export default meta;

type Story = StoryObj<EnhancedColorSelectComponent>;

export const Default: Story = {
  args: {
    items: [
      { color: 'var(--color-red-500)', checked: true },
      { color: 'var(--color-green-500)', checked: false },
      { color: 'var(--color-blue-500)', checked: false },
    ] as never,
  },
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <div qui-color-select>
          <div qui-stack>
            <button
              *ngFor="let item of items"
              qui-color-select-item
              [color]="item.color"
              [checked]="item.checked"
              ></button>
            </div>
        </div>
      </qui-story>
    `,
  }),
};

export const WithValue: Story = {
  args: {
    items: [
      { color: 'var(--color-red-500)', checked: false },
      { color: 'var(--color-green-500)', checked: false },
      { color: 'var(--color-blue-500)', checked: true },
    ] as never,
  },
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <div qui-color-select>
          <div qui-stack>
            <button
              *ngFor="let item of items"
              qui-color-select-item
              [color]="item.color"
              [checked]="item.checked"
              ></button>
            </div>
        </div>
      </qui-story>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    items: [
      { color: 'var(--color-red-500)', checked: true },
      { color: 'var(--color-green-500)', checked: false },
      { color: 'var(--color-blue-500)', checked: false },
    ] as never,
  },
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <div qui-color-select>
          <div qui-stack>
            <button
              *ngFor="let item of items"
              qui-color-select-item
              [color]="item.color"
              [checked]="item.checked"
              disabled
              ></button>
            </div>
        </div>
      </qui-story>
    `,
  }),
};

export const Composition: Story = {
  args: {
    items: [
      { color: 'var(--color-red-500)', checked: false },
      { color: 'var(--color-green-500)', checked: false },
      { color: 'var(--color-blue-500)', checked: true },
      { color: 'var(--color-yellow-500)', checked: false },
      { color: 'var(--color-purple-500)', checked: false },
      { color: 'var(--color-pink-500)', checked: false },
    ] as never,
  },
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <div style="max-width: 280px; padding: var(--spacing-6); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
          <h3 style="margin: 0 0 var(--spacing-1);">Label Color</h3>
          <p style="margin: 0 0 var(--spacing-4); color: var(--color-muted-fg);">Choose a color to tag this project.</p>
          <div qui-color-select>
            <div qui-stack>
              <button
                *ngFor="let item of items"
                qui-color-select-item
                [color]="item.color"
                [checked]="item.checked"
                ></button>
              </div>
          </div>
        </div>
      </qui-story>
    `,
  }),
};
