import type { Meta, StoryFn } from "@storybook/react-vite";

import { CorridorGridBackground } from "./corridor-grid-background";

export default {
  title: "Features/Effects/CorridorGridBackground",
  component: CorridorGridBackground,
  parameters: { layout: "fullscreen" },
  argTypes: {
    fixed: { control: "boolean" },
  },
  args: {
    fixed: false,
  },
} satisfies Meta<typeof CorridorGridBackground>;

export const Default: StoryFn<typeof CorridorGridBackground> = (args) => (
  <div style={{ width: "100vw", height: "100vh" }}>
    <CorridorGridBackground {...args} />
  </div>
);
