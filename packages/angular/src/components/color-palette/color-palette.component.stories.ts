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

export const WithSelectedColor: Story = {
  args: {
    color: 'var(--color-blue-500)',
  },
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <div qui-color-palette [color]="color"></div>
      </qui-story>
    `,
  }),
};

export const Composition: Story = {
  args: {
    color: 'var(--color-purple-500)',
  },
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <div style="max-width: 280px; padding: var(--spacing-6); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
          <h3 style="margin: 0 0 var(--spacing-1);">Label Color</h3>
          <p style="margin: 0 0 var(--spacing-4); color: var(--color-muted-fg);">Choose a color to tag this project.</p>
          <div qui-color-palette [color]="color"></div>
        </div>
      </qui-story>
    `,
  }),
};
