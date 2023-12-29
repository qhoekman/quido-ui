import { Meta, StoryFn } from "@storybook/react";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export default {
  title: "Components/Data Display/Avatar",
  component: Avatar,
  argTypes: {
    variant: {
      options: ["default"],
      control: {
        type: "select",
      },
    },
    size: {
      options: ["default", "sm", "lg"],
      control: {
        type: "select",
      },
    },
  },
} as Meta<typeof Avatar>;

export const Default: StoryFn<typeof Avatar> = (args) => {
  return (
    <Avatar {...args}>
      <AvatarImage src="/icon.png" />
      <AvatarFallback>DIJ</AvatarFallback>
    </Avatar>
  );
};

Default.args = {
  variant: "default",
  size: "default",
};
