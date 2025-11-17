import { Checkbox } from "@/components/checkbox/checkbox";
import { Label } from "@/components/label/label";
import type { Meta, StoryFn } from "@storybook/react-vite";

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
