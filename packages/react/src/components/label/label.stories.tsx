import { Label } from "@/components/label/label";
import { Input } from "@/components/input/input";
import type { StoryObj, Meta } from "@storybook/react-vite";

export default {
  title: "Components/Data Manipulation/Label",
  component: Label,
} satisfies Meta<typeof Label>;

export const Default: StoryObj<typeof Label> = {
  render: (args) => (
    <div style={{ maxWidth: "var(--spacing-sm)" }}>
      <Label {...args}>Full name</Label>
    </div>
  ),
};

export const Composition: StoryObj<typeof Label> = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem", maxWidth: "16rem" }}>
      <Label htmlFor="full-name">Full name</Label>
      <Input id="full-name" placeholder="Jane Doe" />
    </div>
  ),
};
