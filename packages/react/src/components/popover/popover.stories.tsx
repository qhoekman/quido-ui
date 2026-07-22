import { StoryObj, Meta } from "@storybook/react-vite";

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

export const Default: StoryObj<typeof Popover> = {
  render: (args) => {
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
  },
};

export const Composition: StoryObj<typeof Popover> = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          Share
        </Button>
      </PopoverTrigger>
      <PopoverContent style={{ width: 280 }}>
        <p
          style={{
            margin: "0 0 var(--spacing-2)",
            fontSize: "var(--font-size-sm)",
            fontWeight: "var(--font-weight-medium)",
          }}
        >
          Share this document
        </p>
        <div style={{ display: "flex", gap: "var(--spacing-2)" }}>
          <input
            readOnly
            value="https://pulse.quido.online/d/8f3k2"
            style={{
              flex: 1,
              minWidth: 0,
              padding: "var(--spacing-2)",
              border: "var(--border-width-default) solid var(--color-border)",
              borderRadius: "var(--border-radius-md)",
              fontSize: "var(--font-size-sm)",
            }}
          />
          <Button size="sm">Copy</Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
