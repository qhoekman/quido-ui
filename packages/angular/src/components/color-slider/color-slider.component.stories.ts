import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ColorSliderComponent } from './color-slider.component';
import { StoryComponent } from '../../system/components/story/story.component';

type EnhancedColorSliderComponent = ColorSliderComponent & {
  value: number;
};

const meta: Meta<EnhancedColorSliderComponent> = {
  title: 'Components/Data Entry/Color Slider',
  component: ColorSliderComponent,
  decorators: [
    moduleMetadata({
      imports: [ColorSliderComponent, StoryComponent],
    }),
  ],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    mode: {
      control: {
        type: 'select',
      },
      options: ['hue', 'saturation', 'lightness', 'alpha'],
    },
    hue: {
      control: { type: 'range', min: 0, max: 360, step: 1 },
    },
    saturation: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    lightness: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
};
export default meta;

type Story = StoryObj<EnhancedColorSliderComponent>;

export const Default: Story = {
  args: {
    mode: 'hue',
    hue: 0,
    saturation: 100,
    lightness: 50,
  },
  render: (args) => ({
    props: args,
    template: `
      <div qui-color-slider
        [mode]="mode"
        [hue]="hue"
        [saturation]="saturation"
        [lightness]="lightness"
        (valueChange)="value = $event"
      ></div>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
      <div style="max-width: 280px; padding: var(--spacing-6); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
        <h3 style="margin: 0 0 var(--spacing-1);">Accent Color</h3>
        <p style="margin: 0 0 var(--spacing-4); color: var(--color-muted-fg);">Drag to adjust the hue used across your workspace.</p>
        <div qui-color-slider mode="hue" [hue]="210" [saturation]="100" [lightness]="50"></div>
      </div>
    `,
  }),
};
