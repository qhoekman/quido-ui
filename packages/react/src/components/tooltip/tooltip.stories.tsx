import { Meta, StoryFn } from "@storybook/react-vite";

import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { Button } from "../button/button";

export default {
  title: "Components/Overlay/Tooltip",
  component: Tooltip,
  argTypes: {
    open: {
      control: "boolean",
      description: "The controlled open state of the tooltip",
    },
    defaultOpen: {
      control: "boolean",
      description:
        "The open state of the tooltip when it is initially rendered",
    },
    delayDuration: {
      control: "number",
      description:
        "The duration from when the mouse enters the trigger until the tooltip opens",
    },
    disableHoverableContent: {
      control: "boolean",
      description:
        "When true, trying to hover the content will result in the tooltip closing",
    },
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
      description: "The preferred side of the trigger to render against",
    },
    sideOffset: {
      control: "number",
      description: "The distance in pixels from the trigger",
    },
    align: {
      control: "select",
      options: ["start", "center", "end"],
      description: "The preferred alignment against the trigger",
    },
    alignOffset: {
      control: "number",
      description: "An offset in pixels from the 'align' option",
    },
  },
  args: {
    defaultOpen: false,
    delayDuration: 700,
    sideOffset: 4,
  },
} satisfies Meta<typeof Tooltip>;

export const Default: StoryFn<typeof Tooltip> = ({
  side,
  sideOffset,
  align,
  alignOffset,
  ...tooltipArgs
}) => (
  <TooltipProvider>
    <Tooltip {...tooltipArgs}>
      <TooltipTrigger>
        <Button variant="ghost" size="sm">
          Hover
        </Button>
      </TooltipTrigger>
      <TooltipContent
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
      >
        <TooltipArrow style={{ fill: "var(--color-popover)" }} />
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
