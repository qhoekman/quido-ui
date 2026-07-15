import type { StoryObj, Meta } from "@storybook/react-vite";

import { CyberWireframeBackground } from "./cyber-wireframe-background";

export default {
  title: "Features/Effects/CyberWireframeBackground",
  component: CyberWireframeBackground,
  parameters: { layout: "fullscreen" },
  argTypes: {
    fixed: { control: "boolean" },
  },
  args: {
    fixed: false,
  },
} satisfies Meta<typeof CyberWireframeBackground>;

export const Default: StoryObj<typeof CyberWireframeBackground> = {
  render: (args) => (
    <div style={{ width: "100vw", height: "100vh" }}>
      <CyberWireframeBackground {...args} />
    </div>
  ),
};
