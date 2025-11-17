import type { Meta, StoryFn } from "@storybook/react-vite";

import { Badge } from "./badge";

export default {
  title: "Components/Data Display/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "destructive", "outline"],
    },
  },
  args: {
    variant: "primary",
  },
} satisfies Meta<typeof Badge>;

export const Default: StoryFn<typeof Badge> = (args) => (
  <Badge {...args}>1</Badge>
);
