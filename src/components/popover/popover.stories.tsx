import { Meta, StoryFn } from "@storybook/react";

import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export default {
  title: "Components/Overlay/Popover",
  component: Popover,
} as Meta<typeof Popover>;

export const Default: StoryFn<typeof Popover> = (args) => (
  <Popover {...args}>
    <PopoverTrigger>Open</PopoverTrigger>
    <PopoverContent>Place content for the popover here.</PopoverContent>
  </Popover>
);
