import type { StoryObj, Meta } from "@storybook/react-vite";

import { FireflyOrbsBackground } from "./firefly-orbs-background";

export default {
  title: "Features/Effects/FireflyOrbsBackground",
  component: FireflyOrbsBackground,
  parameters: { layout: "fullscreen" },
  argTypes: {
    fixed: { control: "boolean" },
  },
  args: {
    fixed: false,
  },
} satisfies Meta<typeof FireflyOrbsBackground>;

export const Default: StoryObj<typeof FireflyOrbsBackground> = {
  render: (args) => (
    <div style={{ width: "100vw", height: "100vh" }}>
      <FireflyOrbsBackground {...args} />
    </div>
  ),
};
