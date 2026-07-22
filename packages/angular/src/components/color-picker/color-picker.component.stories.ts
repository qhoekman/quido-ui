import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { ColorPickerComponent } from './color-picker.component';
import { TabsComponent } from '../tabs/tabs.component';
import { ColorWheelComponent } from '../color-wheel/color-wheel.component';
import { ColorPaletteComponent } from '../color-palette/color-palette.component';
import { TabsContentComponent } from '../tabs/tabs-content.component';
import { TabsListComponent } from '../tabs/tabs-list.component';
import { TabsTriggerComponent } from '../tabs/tabs-trigger.component';
import { StoryComponent } from '../../system/components/story/story.component';

type EnhancedColorPickerComponent = ColorPickerComponent & {
  color: string;
};

const meta: Meta<EnhancedColorPickerComponent> = {
  title: 'Components/Data Entry/Color Picker',
  component: ColorPickerComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ColorPickerComponent,
        TabsComponent,
        TabsListComponent,
        TabsTriggerComponent,
        TabsContentComponent,
        ColorWheelComponent,
        ColorPaletteComponent,
        StoryComponent,
      ],
    }),
  ],
  argTypes: {
    color: {
      control: 'text',
    },
  } as never,
};
export default meta;

type Story = StoryObj<EnhancedColorPickerComponent>;

export const Default: Story = {
  args: {
    color: '#000000',
  } as never,
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <qui-color-picker
          [color]="color"
        ></qui-color-picker>
      </qui-story>
    `,
  }),
};

export const WithInitialColor: Story = {
  args: {
    color: '#3b82f6',
  } as never,
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <qui-color-picker [color]="color"></qui-color-picker>
      </qui-story>
    `,
  }),
};

export const WithCSSVariable: Story = {
  args: {
    color: 'var(--color-blue-500)',
  } as never,
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <qui-color-picker [color]="color"></qui-color-picker>
      </qui-story>
    `,
  }),
};

export const Composition: Story = {
  args: {
    color: '#3b82f6',
  } as never,
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <div style="max-width: 280px; padding: var(--spacing-6); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
          <h3 style="margin: 0 0 var(--spacing-1);">Brand Color</h3>
          <p style="margin: 0 0 var(--spacing-4); color: var(--color-muted-fg);">This color is used for your workspace's primary buttons and links.</p>
          <qui-color-picker [color]="color"></qui-color-picker>
        </div>
      </qui-story>
    `,
  }),
};
