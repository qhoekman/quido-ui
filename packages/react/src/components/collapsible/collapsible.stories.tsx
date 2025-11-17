import { Meta, StoryFn } from "@storybook/react-vite";
import React from "react";

import { Button } from "@/components/button/button";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";

export default {
  title: "Components/Disclosure/Collapsible",
  component: Collapsible,
  argTypes: {
    defaultOpen: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    defaultOpen: false,
    disabled: false,
  },
} satisfies Meta<typeof Collapsible>;

export const Default: StoryFn<typeof Collapsible> = (args) => {
  return (
    <Collapsible className="w-[350px] space-y-2" {...args}>
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">Lorem ipsum...</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            Toggle
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
        Dolor sit amet.
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          Consectetur.
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          Adipisicing elit.
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
