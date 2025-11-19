import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { ColorPaletteComponent } from './color-palette.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<ColorPaletteComponent> = {
  title: 'Components/Data Entry/Color Palette',
  component: ColorPaletteComponent,
  decorators: [
    moduleMetadata({
      imports: [StoryComponent],
    }),
  ],
  argTypes: {},
};
export default meta;

type Story = StoryObj<ColorPaletteComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <div qui-color-palette></div>
      </qui-story>
    `,
  }),
};
