import { Meta, StoryFn } from "@storybook/react";

import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

export default {
  title: "Components/Overlay/Tooltip",
  component: Tooltip,
} as Meta<typeof Tooltip>;

export const Default: StoryFn<typeof Tooltip> = (args) => (
  <TooltipProvider>
    <Tooltip {...args}>
      <TooltipTrigger>Hover</TooltipTrigger>
      <TooltipContent>
        <TooltipArrow className="fill-white" />
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
