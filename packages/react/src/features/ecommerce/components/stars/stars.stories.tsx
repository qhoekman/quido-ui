import { Stars } from "@/features/ecommerce/components/stars/stars";
import type { Meta, StoryFn } from "@storybook/react-vite";

export default {
  title: "Features/Ecommerce/Components/Stars",
  component: Stars,
} satisfies Meta<typeof Stars>;

export const Default: StoryFn<typeof Stars> = (args) => <Stars {...args} />;
Default.args = {
  rating: 4,
};
