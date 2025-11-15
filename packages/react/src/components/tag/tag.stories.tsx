import { Meta, StoryFn } from "@storybook/react-vite";

import { Tag } from "./tag";

export default {
  title: "Components/Data Display/Tag",
  component: Tag,
  argTypes: {
    variant: {
      options: ["default", "destructive", "outline", "secondary"],
      control: {
        type: "select",
      },
    },
  },
} as Meta<typeof Tag>;

export const Default: StoryFn<typeof Tag> = (args) => (
  <div>
    Lorem ipsum dolor sit amet
    <Tag {...args} className="relative -top-1 ml-1">
      Tag
    </Tag>
  </div>
);
