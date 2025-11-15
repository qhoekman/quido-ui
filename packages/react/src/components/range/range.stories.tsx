import { Meta, StoryFn } from "@storybook/react-vite";

import { Range } from "./range";

export default {
  title: "Components/Data Manipulation/Range",
  component: Range,
  argTypes: {
    min: {
      control: {
        type: "number",
      },
    },
    max: {
      control: {
        type: "number",
      },
    },
    step: {
      control: {
        type: "number",
      },
    },
  },
} as Meta<typeof Range>;

const Template: StoryFn<typeof Range> = (args) => <Range {...args}></Range>;

export const Default = {
  render: Template,
  args: {
    min: 0,
    value: [0, 100],
    max: 100,
    step: 10,
    onValueChange: (value: number) => console.log(value),
  },
};
