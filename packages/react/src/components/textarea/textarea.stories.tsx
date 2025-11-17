import { Textarea } from "@/components/textarea/textarea";
import type { Meta, StoryFn } from "@storybook/react-vite";

export default {
  title: "Components/Data Manipulation/Textarea",
  component: Textarea,
  argTypes: {
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    readOnly: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
    value: {
      control: "text",
    },
    rows: {
      control: "number",
    },
    cols: {
      control: "number",
    },
    maxLength: {
      control: "number",
    },
    minLength: {
      control: "number",
    },
  },
  args: {
    placeholder: "Enter your message",
    disabled: false,
    readOnly: false,
    required: false,
  },
} satisfies Meta<typeof Textarea>;

export const Default: StoryFn<typeof Textarea> = (args) => (
  <div className="max-w-sm">
    <Textarea {...args} />
  </div>
);
Default.args = {
  value:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam lacinia, nunc nisl aliquet nunc, quis aliquam nis",
  placeholder: "Enter your message",
};
