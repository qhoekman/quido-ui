import type { Meta, StoryFn } from "@storybook/react-vite";

import { AmbientOrbsBackground } from "./ambient-orbs-background";

export default {
  title: "Features/Effects/AmbientOrbsBackground",
  component: AmbientOrbsBackground,
  parameters: { layout: "fullscreen" },
  argTypes: {
    fixed: { control: "boolean" },
  },
  args: {
    fixed: false,
  },
} satisfies Meta<typeof AmbientOrbsBackground>;

export const Default: StoryFn<typeof AmbientOrbsBackground> = (args) => (
  <div style={{ width: "100vw", height: "100vh" }}>
    <AmbientOrbsBackground {...args} />
  </div>
);
