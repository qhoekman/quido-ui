import type { StoryObj, Meta } from "@storybook/react-vite";

import { IsometricCubeBackground } from "./isometric-cube-background";

export default {
  title: "Features/Effects/IsometricCubeBackground",
  component: IsometricCubeBackground,
  parameters: { layout: "fullscreen" },
  argTypes: {
    fixed: { control: "boolean" },
  },
  args: {
    fixed: false,
  },
} satisfies Meta<typeof IsometricCubeBackground>;

export const Default: StoryObj<typeof IsometricCubeBackground> = {
  render: (args) => (
    <div style={{ width: "100vw", height: "100vh" }}>
      <IsometricCubeBackground {...args} />
    </div>
  ),
};
