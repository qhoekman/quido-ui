import { Meta, StoryFn } from "@storybook/react-vite";

import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

export default {
  title: "Components/Data Manipulation/Toggle Group",
  component: ToggleGroup,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "outline"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    type: {
      control: "select",
      options: ["single", "multiple"],
    },
  },
  args: {
    variant: "primary",
    size: "md",
    type: "single",
  },
} satisfies Meta<typeof ToggleGroup>;

export const Default: StoryFn<typeof ToggleGroup> = (args) => (
  <ToggleGroup {...args}>
    <ToggleGroupItem value="a">A</ToggleGroupItem>
    <ToggleGroupItem value="b">B</ToggleGroupItem>
    <ToggleGroupItem value="c">C</ToggleGroupItem>
  </ToggleGroup>
);
