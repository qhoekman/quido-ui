import { StoryObj, Meta } from "@storybook/react-vite";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

export default {
  title: "Components/Data Manipulation/Select",
  component: Select,
} as Meta<typeof Select>;

export const Default: StoryObj<typeof Select> = {
  render: (args) => (
    <form>
      <Select {...args}>
        <SelectTrigger style={{ width: "var(--spacing-18)" }}>
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </form>
  ),
};

export const Composition: StoryObj<typeof Select> = {
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
      <Select defaultValue="priority">
        <SelectTrigger style={{ width: "10rem" }}>
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="priority">Priority</SelectItem>
          <SelectItem value="due-date">Due date</SelectItem>
          <SelectItem value="assignee">Assignee</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};
