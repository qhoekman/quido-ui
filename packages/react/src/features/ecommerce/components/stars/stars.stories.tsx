import { Stars } from "@/features/ecommerce/components/stars/stars";
import type { Meta, StoryFn } from "@storybook/react-vite";

export default {
  title: "Features/Ecommerce/Components/Stars",
  component: Stars,
  argTypes: {
    total: {
      control: "number",
    },
    rating: {
      control: {
        type: "number",
        min: 0,
        max: 5,
        step: 0.5,
      },
    },
  },
  args: {
    total: 5,
    rating: 4,
  },
} satisfies Meta<typeof Stars>;

export const Default: StoryFn<typeof Stars> = (args) => <Stars {...args} />;
