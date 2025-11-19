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
    <Collapsible
      style={{
        width: "350px",
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-2)",
      }}
      {...args}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--spacing-4)",
          padding: "var(--spacing-4)",
        }}
      >
        <h4
          style={{
            fontSize: "var(--font-size-sm)",
            fontWeight: "var(--font-weight-semibold)",
          }}
        >
          Lorem ipsum...
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            Toggle
          </Button>
        </CollapsibleTrigger>
      </div>
      <div
        style={{
          borderRadius: "var(--border-radius-md)",
          border: "var(--border-width-default) solid var(--color-border)",
          padding: "var(--spacing-4)",
          fontSize: "var(--font-size-sm)",
          fontFamily: "var(--font-family-mono)",
          boxShadow: "var(--box-shadow-sm)",
        }}
      >
        Dolor sit amet.
      </div>
      <CollapsibleContent>
        <div
          style={{
            borderRadius: "var(--border-radius-md)",
            border: "var(--border-width-default) solid var(--color-border)",
            padding: "var(--spacing-4)",
            fontSize: "var(--font-size-sm)",
            fontFamily: "var(--font-family-mono)",
            boxShadow: "var(--box-shadow-sm)",
          }}
        >
          Consectetur.
        </div>
        <div
          style={{
            borderRadius: "var(--border-radius-md)",
            border: "var(--border-width-default) solid var(--color-border)",
            padding: "var(--spacing-4)",
            fontSize: "var(--font-size-sm)",
            fontFamily: "var(--font-family-mono)",
            boxShadow: "var(--box-shadow-sm)",
          }}
        >
          Adipisicing elit.
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
