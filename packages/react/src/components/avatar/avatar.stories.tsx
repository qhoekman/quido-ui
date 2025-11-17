import { Meta, StoryFn } from "@storybook/react-vite";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export default {
  title: "Components/Data Display/Avatar",
  component: Avatar,
  argTypes: {
    variant: {
      options: ["primary"],
      control: {
        type: "select",
      },
    },
    size: {
      options: ["md", "sm", "lg"],
      control: {
        type: "select",
      },
    },
  },
  args: {
    variant: "primary",
    size: "md",
  },
} as Meta<typeof Avatar>;

export const Default: StoryFn<typeof Avatar> = (args) => {
  return (
    <Avatar {...args}>
      <AvatarImage src="/icon.png" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  );
};
