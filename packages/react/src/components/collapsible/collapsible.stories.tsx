import { StoryObj, Meta } from "@storybook/react-vite";
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

export const Default: StoryObj<typeof Collapsible> = {
  render: (args) => {
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
            Saved Recipes (3)
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
          Margherita Pizza
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
            Spaghetti Carbonara
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
            Chicken Tikka Masala
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

export const Composition: StoryObj<typeof Collapsible> = {
  render: () => {
    return (
      <div
        style={{
          maxWidth: "24rem",
          padding: "var(--spacing-6)",
          border: "var(--border-width-default) solid var(--color-border)",
          borderRadius: "var(--border-radius-lg)",
        }}
      >
        <h3 style={{ margin: "0 0 var(--spacing-1)" }}>Deploy Settings</h3>
        <p
          style={{
            margin: "0 0 var(--spacing-4)",
            color: "var(--color-muted-fg)",
            fontSize: "var(--font-size-sm)",
          }}
        >
          Configure how this project is deployed.
        </p>
        <Collapsible style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-2)" }}>
          <CollapsibleTrigger asChild>
            <Button variant="outline" size="sm">
              Show advanced options
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacing-2)",
                fontSize: "var(--font-size-sm)",
                color: "var(--color-muted-fg)",
              }}
            >
              <div>Build command: npm run build</div>
              <div>Output directory: dist</div>
              <div>Node version: 20.x</div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  },
};
