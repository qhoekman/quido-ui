import type { Meta, StoryFn } from "@storybook/react-vite";

import { Tag } from "./tag";

export default {
  title: "Components/Data Display/Tag",
  component: Tag,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "destructive", "outline", "secondary"],
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
} satisfies Meta<typeof Tag>;

export const Default: StoryFn<typeof Tag> = (args) => (
  <div>
    Lorem ipsum dolor sit amet
    <Tag {...args} className="relative -top-1 ml-1">
      Tag
    </Tag>
  </div>
);
