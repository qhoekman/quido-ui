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
      <AvatarImage src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=128&h=128&facepad=2" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  );
};

export const Fallback: StoryFn<typeof Avatar> = (args) => {
  return (
    <Avatar {...args}>
      <AvatarImage src="/icon.png" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  );
};
