import type { StoryObj, Meta } from "@storybook/react-vite";

import { AbstractCirclesBackground } from "./abstract-circles-background";

export default {
  title: "Features/Effects/AbstractCirclesBackground",
  component: AbstractCirclesBackground,
  parameters: { layout: "fullscreen" },
  argTypes: {
    fixed: { control: "boolean" },
  },
  args: {
    fixed: false,
  },
} satisfies Meta<typeof AbstractCirclesBackground>;

export const Default: StoryObj<typeof AbstractCirclesBackground> = {
  render: (args) => (
    <div style={{ width: "100vw", height: "100vh" }}>
      <AbstractCirclesBackground {...args} />
    </div>
  ),
};
