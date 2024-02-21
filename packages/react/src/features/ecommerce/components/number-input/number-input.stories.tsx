import { NumberInput } from "@/features/ecommerce/components/number-input/number-input";
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Features/Ecommerce/Components/Number Input",
  component: NumberInput,
} satisfies Meta<typeof NumberInput>;

export const Default: StoryFn<typeof NumberInput> = (args) => (
  <form>
    <NumberInput {...args} />
  </form>
);
Default.args = {
  value: 1,
};
