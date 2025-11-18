import { Meta, StoryFn } from "@storybook/react-vite";
import { useState } from "react";

import { Slider } from "./slider";

export default {
  title: "Components/Data Manipulation/Slider",
  component: Slider,
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
  },
  args: {
    min: 0,
    max: 100,
    step: 10,
    disabled: false,
    value: 50,
  },
} satisfies Meta<typeof Slider>;

const Template: StoryFn<typeof Slider> = (args) => {
  const [value, setValue] = useState(args.value ?? 50);

  return (
    <Slider
      {...args}
      value={value}
      onValueChange={(newValue) => {
        setValue(newValue);
        args.onValueChange?.(newValue);
      }}
    />
  );
};

export const Default = {
  render: Template,
  args: {
    onValueChange: (value: number) => console.log(value),
  },
};
