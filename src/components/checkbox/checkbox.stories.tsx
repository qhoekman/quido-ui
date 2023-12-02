import { Checkbox } from "@/components/checkbox/checkbox";
import { Label } from "@/components/label/label";
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Data Manipulation/Checkbox",
  component: Checkbox,
  argTypes: {
    checked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Checkbox>;

export const Default: StoryFn<typeof Checkbox> = (args) => (
  <div className="flex items-center space-x-2">
    <Checkbox id="terms" {...args} />
    <Label
      htmlFor="terms"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Accept terms and conditions
    </Label>
  </div>
);
