import { StoryObj, Meta } from "@storybook/react-vite";

import { Label } from "@/components/label/label";

import { RadioGroup, RadioGroupItem } from "./radio-group";
import { useState } from "react";

export default {
  title: "Components/Data Manipulation/Radio Group",
  component: RadioGroup,
  argTypes: {
    defaultValue: {
      control: "text",
      description:
        "The value of the radio item that should be checked when initially rendered",
    },
    value: {
      control: "text",
      description: "The controlled value of the radio group",
    },
    disabled: {
      control: "boolean",
      description:
        "When true, prevents the user from interacting with the radio group",
    },
    required: {
      control: "boolean",
      description:
        "When true, indicates that the user must select a value before submitting",
    },
    name: {
      control: "text",
      description:
        "The name of the group, submitted as a name/value pair with form data",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The orientation of the component",
    },
  },
  args: {
    defaultValue: "option-one",
    disabled: false,
    required: false,
  },
} satisfies Meta<typeof RadioGroup>;

export const Default: StoryObj<typeof RadioGroup> = {
  render: (args) => {
    const [value, setValue] = useState(args.defaultValue ?? "");
    return (
      <form>
        <RadioGroup
          {...args}
          value={value}
          onValueChange={(newValue) => setValue(newValue)}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--spacing-2)",
            }}
          >
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">Credit card</Label>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--spacing-2)",
            }}
          >
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">PayPal</Label>
          </div>
        </RadioGroup>
      </form>
    );
  },
};

export const Composition: StoryObj<typeof RadioGroup> = {
  render: () => {
    const [value, setValue] = useState("weekly");
    return (
      <div style={{ maxWidth: "18rem" }}>
        <h3 style={{ margin: "0 0 0.25rem" }}>Notification Frequency</h3>
        <p
          style={{
            margin: "0 0 1rem",
            color: "var(--color-muted-fg)",
            fontSize: "var(--font-size-sm)",
          }}
        >
          How often should we email you a digest?
        </p>
        <RadioGroup value={value} onValueChange={setValue}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-2)" }}>
            <RadioGroupItem value="daily" id="freq-daily" />
            <Label htmlFor="freq-daily">Daily</Label>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-2)" }}>
            <RadioGroupItem value="weekly" id="freq-weekly" />
            <Label htmlFor="freq-weekly">Weekly</Label>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-2)" }}>
            <RadioGroupItem value="never" id="freq-never" />
            <Label htmlFor="freq-never">Never</Label>
          </div>
        </RadioGroup>
      </div>
    );
  },
};
