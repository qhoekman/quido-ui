import type { StoryObj, Meta } from "@storybook/react-vite";

import { PspWaveBackground } from "./psp-wave-background";

export default {
  title: "Features/Effects/PspWaveBackground",
  component: PspWaveBackground,
  parameters: { layout: "fullscreen" },
  argTypes: {
    fixed: { control: "boolean" },
  },
  args: {
    fixed: false,
  },
} satisfies Meta<typeof PspWaveBackground>;

export const Default: StoryObj<typeof PspWaveBackground> = {
  render: (args) => (
    <div style={{ width: "100vw", height: "100vh" }}>
      <PspWaveBackground {...args} />
    </div>
  ),
};
