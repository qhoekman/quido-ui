import { Meta, StoryFn } from "@storybook/react-vite";

import { ScrollArea } from "./scroll-area";

export default {
  title: "Components/Layout/Scroll Area",
  component: ScrollArea,
  argTypes: {
    type: {
      control: "select",
      options: ["auto", "always", "scroll", "hover"],
      description: "Controls when scrollbars appear",
    },
  },
  args: {
    type: "auto",
  },
} satisfies Meta<typeof ScrollArea>;

const Template: StoryFn<typeof ScrollArea> = (args) => (
  <ScrollArea
    style={{
      height: "200px",
      width: "350px",
      borderRadius: "var(--border-radius-md)",
      border: "var(--border-width-default) solid var(--color-border)",
      padding: "var(--spacing-4)",
    }}
    {...args}
  >
    Jokester began sneaking into the castle in the middle of the night and
    leaving jokes all over the place: under the king's pillow, in his soup, even
    in the royal toilet. The king was furious, but he couldn't seem to stop
    Jokester. And then, one day, the people of the kingdom discovered that the
    jokes left by Jokester were so funny that they couldn't help but laugh. And
    once they started laughing, they couldn't stop.
  </ScrollArea>
);

export const Default = {
  render: Template,
};
