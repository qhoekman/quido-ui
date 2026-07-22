import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { ColorWheelComponent } from './color-wheel.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<ColorWheelComponent> = {
  title: 'Components/Data Entry/Color Wheel',
  component: ColorWheelComponent,
  decorators: [
    moduleMetadata({
      imports: [StoryComponent],
    }),
  ],
};
export default meta;

type Story = StoryObj<ColorWheelComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <qui-color-wheel></qui-color-wheel>
      </qui-story>
    `,
  }),
};

export const WithCustomHue: Story = {
  args: {
    hue: 180,
    saturation: 80,
    lightness: 50,
  } as never,
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <qui-color-wheel [hue]="hue" [saturation]="saturation" [lightness]="lightness"></qui-color-wheel>
      </qui-story>
    `,
  }),
};

export const LowSaturation: Story = {
  args: {
    hue: 0,
    saturation: 30,
    lightness: 50,
  } as never,
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <qui-color-wheel [hue]="hue" [saturation]="saturation" [lightness]="lightness"></qui-color-wheel>
      </qui-story>
    `,
  }),
};

export const Composition: Story = {
  args: {
    hue: 265,
    saturation: 80,
    lightness: 55,
  } as never,
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <div style="max-width: 280px; padding: var(--spacing-6); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
          <h3 style="margin: 0 0 var(--spacing-1);">Custom Theme Color</h3>
          <p style="margin: 0 0 var(--spacing-4); color: var(--color-muted-fg);">Pick an exact hue, saturation, and lightness.</p>
          <qui-color-wheel [hue]="hue" [saturation]="saturation" [lightness]="lightness"></qui-color-wheel>
        </div>
      </qui-story>
    `,
  }),
};
