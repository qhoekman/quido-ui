import { Input } from "@/components/input/input";
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Data Manipulation/Input",
  component: Input,
  argTypes: {
    value: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Input>;

export const Default: StoryFn<typeof Input> = (args) => <Input {...args} />;
Default.args = {
  value: "John doe",
  placeholder: "Enter your name",
};
