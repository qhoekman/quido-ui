import { Meta, StoryFn } from "@storybook/react-vite";

import { Separator } from "./separator";

export default {
  title: "Components/Layout/Separator",
  component: Separator,
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: {
        type: "select",
      },
    },
  },
} as Meta<typeof Separator>;

export const Default: StoryFn<typeof Separator> = (args) => (
  <div className="h-[100px]">
    <Separator {...args}></Separator>
  </div>
);
