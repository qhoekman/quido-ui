import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { SliderComponent } from './slider.component';

const meta: Meta<SliderComponent> = {
  title: 'Components/Data Entry/Slider',
  component: SliderComponent,
  decorators: [
    moduleMetadata({
      imports: [SliderComponent],
    }),
  ],
  argTypes: {
    min: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
    value: {
      control: 'number',
    },
    step: {
      control: 'number',
    },
  } as never,
};
export default meta;

type Story = StoryObj<SliderComponent>;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    value: 50,
    step: 10,
  } as never,
  render: (args) => ({
    props: args,
    template: `
      <div qui-slider [min]="min" [max]="max" [(value)]="value" [step]="step"></div>
    `,
  }),
};
