import { Meta, StoryFn } from "@storybook/react";

import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

export default {
  title: "Components/Data Manipulation/Toggle Group",
  component: ToggleGroup,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["default"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["default"],
      },
    },
    type: {
      options: ["single", "multiple"],
      control: {
        type: "select",
      },
    },
  },
} as Meta<typeof ToggleGroup>;

export const Default: StoryFn<typeof ToggleGroup> = (args) => (
  <ToggleGroup {...args}>
    <ToggleGroupItem value="a">A</ToggleGroupItem>
    <ToggleGroupItem value="b">B</ToggleGroupItem>
    <ToggleGroupItem value="c">C</ToggleGroupItem>
  </ToggleGroup>
);
Default.args = {
  type: "single",
};
