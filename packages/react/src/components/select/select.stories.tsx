import { Meta, StoryFn } from "@storybook/react";

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

export const Default: StoryFn<typeof Select> = (args) => (
  <form>
    <Select {...args}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  </form>
);
