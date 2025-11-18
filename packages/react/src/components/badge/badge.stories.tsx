import type { Meta, StoryFn } from "@storybook/react-vite";

import { Badge } from "./badge";
import { HStack } from "../hstack/hstack";

export default {
  title: "Components/Data Display/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "destructive", "outline"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
  args: {
    variant: "primary",
    size: "md",
  },
} satisfies Meta<typeof Badge>;

export const Default: StoryFn<typeof Badge> = (args) => (
  <div>
    Notifications
    <Badge {...args}>3</Badge>
  </div>
);

export const WithText: StoryFn<typeof Badge> = (args) => (
  <div>
    Messages
    <Badge {...args}>99+</Badge>
  </div>
);

export const Sizes: StoryFn<typeof Badge> = () => (
  <HStack>
    <Badge size="sm">5</Badge>
    <Badge size="md">12</Badge>
    <Badge size="lg">42</Badge>
  </HStack>
);
