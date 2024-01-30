import { Block, BlockTitle } from "@/features/mobile/components/block/block";
import { ListButton } from "@/features/mobile/components/list-button/list-button";
import { ViewportLayout } from "@/features/mobile/layouts/viewport/viewport";
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Features/Mobile/Components/List Button",
  component: ListButton,
} as Meta<typeof ListButton>;

export const Default: StoryFn = (args) => (
  <ViewportLayout>
    <BlockTitle>List Button</BlockTitle>
    <Block className="p-0" inset>
      <ul>
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={index}>
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
