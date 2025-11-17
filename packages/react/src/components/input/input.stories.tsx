import { Input } from "@/components/input/input";
import type { Meta, StoryFn } from "@storybook/react-vite";

export default {
  title: "Components/Data Manipulation/Input",
  component: Input,
  argTypes: {
    type: {
      control: "select",
      options: [
        "text",
        "email",
        "password",
        "number",
        "tel",
        "url",
        "search",
        "date",
        "time",
        "datetime-local",
        "month",
        "week",
        "file",
      ],
    },
    placeholder: {
      control: "text",
    },
    value: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
    readOnly: {
      control: "boolean",
    },
    maxLength: {
      control: "number",
    },
    minLength: {
      control: "number",
    },
  },
  args: {
    placeholder: "Enter your name",
    disabled: false,
    required: false,
    readOnly: false,
  },
} satisfies Meta<typeof Input>;

export const Default: StoryFn<typeof Input> = (args) => (
  <div className="max-w-sm">
    <Input {...args} />
  </div>
);
Default.args = {
  value: "John doe",
};
