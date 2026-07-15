import type { StoryObj, Meta } from "@storybook/react-vite";

import { AbstractRectanglesBackground } from "./abstract-rectangles-background";

export default {
  title: "Features/Effects/AbstractRectanglesBackground",
  component: AbstractRectanglesBackground,
  parameters: { layout: "fullscreen" },
  argTypes: {
    fixed: { control: "boolean" },
  },
  args: {
    fixed: false,
  },
} satisfies Meta<typeof AbstractRectanglesBackground>;

export const Default: StoryObj<typeof AbstractRectanglesBackground> = {
  render: (args) => (
    <div style={{ width: "100vw", height: "100vh" }}>
      <AbstractRectanglesBackground {...args} />
    </div>
  ),
};
