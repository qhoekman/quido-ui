import { Meta, StoryFn } from "@storybook/react-vite";

import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "../button/button";

export default {
  title: "Components/Overlay/Popover",
  component: Popover,
  argTypes: {
    defaultOpen: {
      control: "boolean",
    },
    modal: {
      control: "boolean",
    },
    align: {
      control: "select",
      options: ["start", "center", "end"],
    },
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
    },
    sideOffset: {
      control: "number",
    },
  },
  args: {
    defaultOpen: false,
    align: "center",
    sideOffset: 4,
  },
} satisfies Meta<typeof Popover>;

export const Default: StoryFn<typeof Popover> = (args) => {
  const { align, side, sideOffset, ...popoverProps } = args;
  return (
    <Popover {...popoverProps}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm">
          Open
        </Button>
      </PopoverTrigger>
      <PopoverContent align={align} side={side} sideOffset={sideOffset}>
        Place content for the popover here.
      </PopoverContent>
    </Popover>
  );
};
