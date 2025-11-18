import { Checkbox, CheckboxLabel } from "@/components/checkbox/checkbox";
import { Label } from "@/components/label/label";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useState } from "react";

export default {
  title: "Components/Data Manipulation/Checkbox",
  component: Checkbox,
  argTypes: {
    checked: {
      control: "boolean",
    },
    defaultChecked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
    name: {
      control: "text",
    },
    value: {
      control: "text",
    },
  },
  args: {
    checked: false,
    disabled: false,
    required: false,
  },
} satisfies Meta<typeof Checkbox>;

export const Default: StoryFn<typeof Checkbox> = (args) => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: "var(--spacing-2)" }}
    >
      <Checkbox
        id="terms"
        {...args}
        checked={checked}
        onCheckedChange={setChecked}
      />
      <CheckboxLabel htmlFor="terms">Accept terms and conditions</CheckboxLabel>
    </div>
  );
};
