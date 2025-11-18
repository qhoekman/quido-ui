import { Block, BlockTitle } from "@/features/mobile/components/block/block";
import { ListButton } from "@/features/mobile/components/list-button/list-button";
import { ViewportLayout } from "@/features/mobile/layouts/viewport/viewport";
import type { Meta, StoryFn } from "@storybook/react-vite";

export default {
  title: "Features/Mobile/Components/List Button",
  component: ListButton,
  argTypes: {
    disabled: {
      control: "boolean",
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
    },
  },
  args: {
    disabled: false,
    type: "button",
  },
} satisfies Meta<typeof ListButton>;

export const Default: StoryFn<typeof ListButton> = (args) => (
  <ViewportLayout>
    <BlockTitle>List Button</BlockTitle>
    <Block className="p-0" inset>
      <ul>
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={index} style={{ listStyle: "none" }}>
            <ListButton {...args}>
              <span>Button</span>
            </ListButton>
          </li>
        ))}
      </ul>
    </Block>
  </ViewportLayout>
);

Default.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "mobile2",
  },
};
