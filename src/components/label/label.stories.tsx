import { Label } from "@/components/label/label";
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Data Manipulation/Label",
  component: Label,
  argTypes: {
    children: {
      control: "text",
    },
  },
} satisfies Meta<typeof Label>;

export const Default: StoryFn<typeof Label> = (args) => <Label {...args} />;
Default.args = {
  children: "Label",
};
