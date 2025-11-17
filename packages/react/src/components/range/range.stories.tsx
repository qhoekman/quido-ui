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
    disabled: {
      control: "boolean",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
  args: {
    min: 0,
    max: 100,
    step: 10,
    disabled: false,
    value: [0, 100],
  },
} satisfies Meta<typeof Range>;

const Template: StoryFn<typeof Range> = (args) => <Range {...args}></Range>;

export const Default = {
  render: Template,
  args: {
    onValueChange: (value: number[]) => console.log(value),
  },
};
