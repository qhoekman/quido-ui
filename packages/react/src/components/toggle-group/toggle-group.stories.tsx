import { StoryObj, Meta } from "@storybook/react-vite";

import { ToggleGroup, ToggleGroupItem } from "./toggle-group";
import { Bold, Italic, Strikethrough } from "lucide-react";

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

export const Default: StoryObj<typeof ToggleGroup> = {
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="bold">
        <Bold size={16} />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <Italic size={16} />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough">
        <Strikethrough size={16} />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Composition: StoryObj<typeof ToggleGroup> = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "20rem",
      }}
    >
      <h3 style={{ margin: 0 }}>Sprint Backlog</h3>
      <ToggleGroup type="single" defaultValue="list" variant="outline" size="sm">
        <ToggleGroupItem value="list">List</ToggleGroupItem>
        <ToggleGroupItem value="board">Board</ToggleGroupItem>
        <ToggleGroupItem value="calendar">Calendar</ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
};
