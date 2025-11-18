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
    <Badge {...args} className="relative -top-1 ml-1">
      3
    </Badge>
  </div>
);

export const WithText: StoryFn<typeof Badge> = (args) => (
  <div>
    Messages
    <Badge {...args} className="relative -top-1 ml-1">
      99+
    </Badge>
  </div>
);

export const Sizes: StoryFn<typeof Badge> = () => (
  <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
    <div>
      Small
      <Badge size="sm" className="relative -top-1 ml-1">
        5
      </Badge>
    </div>
    <div>
      Medium
      <Badge size="md" className="relative -top-1 ml-1">
        12
      </Badge>
    </div>
    <div>
      Large
      <Badge size="lg" className="relative -top-1 ml-1">
        42
      </Badge>
    </div>
  </div>
);
