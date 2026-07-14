import type { Meta, StoryFn } from "@storybook/react-vite";

import { GridSquaresBackground } from "./grid-squares-background";

export default {
  title: "Features/Effects/GridSquaresBackground",
  component: GridSquaresBackground,
  parameters: { layout: "fullscreen" },
  argTypes: {
    fixed: { control: "boolean" },
  },
  args: {
    fixed: false,
  },
} satisfies Meta<typeof GridSquaresBackground>;

export const Default: StoryFn<typeof GridSquaresBackground> = (args) => (
  <div style={{ width: "100vw", height: "100vh" }}>
    <GridSquaresBackground {...args} />
  </div>
);
