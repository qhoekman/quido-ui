import { NumberInput } from "@/features/ecommerce/components/number-input/number-input";
import type { Meta, StoryFn } from "@storybook/react-vite";

export default {
  title: "Features/Ecommerce/Components/Number Input",
  component: NumberInput,
  argTypes: {
    disabled: {
      control: "boolean",
    },
    value: {
      control: "number",
    },
    min: {
      control: "number",
    },
    max: {
      control: "number",
    },
    step: {
      control: "number",
    },
    placeholder: {
      control: "text",
    },
  },
  args: {
    disabled: false,
    placeholder: "0",
  },
} satisfies Meta<typeof NumberInput>;

export const Default: StoryFn<typeof NumberInput> = (args) => (
  <form>
    <NumberInput {...args} />
  </form>
);
Default.args = {
  value: 1,
};
