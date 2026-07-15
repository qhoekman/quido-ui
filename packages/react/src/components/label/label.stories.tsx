import { Label } from "@/components/label/label";
import type { StoryObj, Meta } from "@storybook/react-vite";

export default {
  title: "Components/Data Manipulation/Label",
  component: Label,
} satisfies Meta<typeof Label>;

export const Default: StoryObj<typeof Label> = {
  render: (args) => (
    <div style={{ maxWidth: "var(--spacing-sm)" }}>
      <Label {...args}>Label</Label>
    </div>
  ),
};
