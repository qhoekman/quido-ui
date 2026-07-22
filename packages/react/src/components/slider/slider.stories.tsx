import type { Meta, StoryObj } from "@storybook/react-vite";
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

export const Default: StoryObj<typeof Slider> = {
  render: (args) => {
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
  },
  args: {
    onValueChange: (value: number) => console.log(value),
  },
};

export const Composition: StoryObj<typeof Slider> = {
  render: () => {
    const [value, setValue] = useState(70);
    return (
      <div style={{ maxWidth: "18rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "0.5rem",
          }}
        >
          <span style={{ fontWeight: 600 }}>Volume</span>
          <span style={{ color: "var(--color-muted-fg)", fontSize: "var(--font-size-sm)" }}>
            {value}%
          </span>
        </div>
        <Slider min={0} max={100} step={5} value={value} onValueChange={setValue} />
      </div>
    );
  },
};
