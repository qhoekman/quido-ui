import { Meta, StoryFn } from '@storybook/react-vite';

import { Slider } from './slider';

export default {
  title: 'Components/Data Manipulation/Slider',
  component: Slider,
  argTypes: {
    min: {
      control: {
        type: 'number',
      },
    },
    max: {
      control: {
        type: 'number',
      },
    },
    step: {
      control: {
        type: 'number',
      },
    },
  },
} as Meta<typeof Slider>;

const Template: StoryFn<typeof Slider> = (args) => <Slider {...args}></Slider>;

export const Default = {
  render: Template,
  args: {
    min: 0,
    max: 100,
    step: 10,
    onValueChange: (value: number) => console.log(value),
  },
};
