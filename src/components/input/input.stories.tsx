import { Input } from "@/components/input/input";
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Input",
  component: Input,
} as Meta<typeof Input>;

export const Default: StoryFn = (args) => <Input {...args} />;
