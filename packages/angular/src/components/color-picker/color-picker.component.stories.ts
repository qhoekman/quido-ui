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
      <pui-story>
        <pui-color-picker
          [color]="color"
        ></pui-color-picker>
      </pui-story>
    `,
  }),
};
