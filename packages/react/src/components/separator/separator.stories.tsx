import { Meta, StoryFn } from "@storybook/react-vite";

import { Separator } from "./separator";

export default {
  title: "Components/Layout/Separator",
  component: Separator,
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    decorative: {
      control: "boolean",
    },
  },
  args: {
    orientation: "horizontal",
    decorative: true,
  },
} satisfies Meta<typeof Separator>;

export const Default: StoryFn<typeof Separator> = (args) => (
  <div style={{ height: "100px" }}>
    <Separator {...args}></Separator>
  </div>
);
