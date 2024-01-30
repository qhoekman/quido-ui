import { Meta, StoryFn } from "@storybook/react";

import { Badge } from "./badge";

export default {
  title: "Components/Data Display/Badge",
  component: Badge,
} as Meta<typeof Badge>;

export const Default: StoryFn<typeof Badge> = (args) => (
  <Badge {...args}></Badge>
);
Default.args = {
  children: "1",
};
