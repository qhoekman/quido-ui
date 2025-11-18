import type { Meta, StoryFn } from "@storybook/react-vite";

import { Tag } from "./tag";

export default {
  title: "Components/Data Display/Tag",
  component: Tag,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "destructive", "outline"],
    },
  },
  args: {
    variant: "primary",
  },
} satisfies Meta<typeof Tag>;

export const Default: StoryFn<typeof Tag> = (args) => (
  <Tag {...args}>New</Tag>
);

export const Variants: StoryFn<typeof Tag> = () => (
  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
    <Tag variant="primary">Primary</Tag>
    <Tag variant="secondary">Secondary</Tag>
    <Tag variant="destructive">Destructive</Tag>
    <Tag variant="outline">Outline</Tag>
  </div>
);
