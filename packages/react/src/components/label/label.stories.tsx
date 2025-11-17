import { Label } from "@/components/label/label";
import type { Meta, StoryFn } from "@storybook/react-vite";

export default {
  title: "Components/Data Manipulation/Label",
  component: Label,
} satisfies Meta<typeof Label>;

export const Default: StoryFn<typeof Label> = (args) => (
  <div className="max-w-sm">
    <Label {...args}>Label</Label>
  </div>
);
