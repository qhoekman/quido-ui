import type { Meta, StoryObj } from "@storybook/react-vite";

import { Range } from "./range";
import { useState } from "react";

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

export const Default: StoryObj<typeof Range> = {
  render: (args) => {
    const [value, setValue] = useState(args.value ?? [0, 100]);
    return (
      <Range
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
    onValueChange: (value: number[]) => console.log(value),
  },
};

export const Composition: StoryObj<typeof Range> = {
  render: () => {
    const [value, setValue] = useState([25, 150]);
    return (
      <div style={{ maxWidth: "18rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "0.5rem",
          }}
        >
          <span style={{ fontWeight: 600 }}>Price range</span>
          <span style={{ color: "var(--color-muted-fg)", fontSize: "var(--font-size-sm)" }}>
            ${value[0]} – ${value[1]}
          </span>
        </div>
        <Range min={0} max={200} step={5} value={value} onValueChange={setValue} />
      </div>
    );
  },
};
