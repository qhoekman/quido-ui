import type { StoryObj, Meta } from "@storybook/react-vite";

import { WireframeSphereBackground } from "./wireframe-sphere-background";

export default {
  title: "Features/Effects/WireframeSphereBackground",
  component: WireframeSphereBackground,
  parameters: { layout: "fullscreen" },
  argTypes: {
    fixed: { control: "boolean" },
  },
  args: {
    fixed: false,
  },
} satisfies Meta<typeof WireframeSphereBackground>;

export const Default: StoryObj<typeof WireframeSphereBackground> = {
  render: (args) => (
    <div style={{ width: "100vw", height: "100vh" }}>
      <WireframeSphereBackground {...args} />
    </div>
  ),
};
