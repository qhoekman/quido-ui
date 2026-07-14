import type { Meta, StoryFn } from "@storybook/react-vite";

import { OceanLightsBackground } from "./ocean-lights-background";

export default {
  title: "Features/Effects/OceanLightsBackground",
  component: OceanLightsBackground,
  parameters: { layout: "fullscreen" },
  argTypes: {
    fixed: { control: "boolean" },
  },
  args: {
    fixed: false,
  },
} satisfies Meta<typeof OceanLightsBackground>;

export const Default: StoryFn<typeof OceanLightsBackground> = (args) => (
  <div style={{ width: "100vw", height: "100vh" }}>
    <OceanLightsBackground {...args} />
  </div>
);
