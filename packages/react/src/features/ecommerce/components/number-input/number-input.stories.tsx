import { NumberInput } from "@/features/ecommerce/components/number-input/number-input";
import type { StoryObj, Meta } from "@storybook/react-vite";

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

export const Default: StoryObj<typeof NumberInput> = {
  render: (args) => (
    <form>
      <NumberInput {...args} />
    </form>
  ),

  args: {
    value: 1,
  },
};
