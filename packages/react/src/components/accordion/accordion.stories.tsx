import { Meta, StoryFn } from "@storybook/react-vite";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

export default {
  title: "Components/Disclosure/Accordion",
  component: Accordion,
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
      description: "Determines whether one or multiple items can be opened at the same time",
    },
    collapsible: {
      control: "boolean",
      description: "When type is 'single', allows closing an open item by clicking it again",
    },
    disabled: {
      control: "boolean",
      description: "When true, prevents the user from interacting with the accordion",
    },
    defaultValue: {
      control: "text",
      description: "The value of the item that should be open when initially rendered (uncontrolled)",
    },
    orientation: {
      control: "select",
      options: ["vertical", "horizontal"],
      description: "The orientation of the accordion",
    },
  },
  args: {
    type: "single",
    collapsible: false,
    disabled: false,
  },
} satisfies Meta<typeof Accordion>;

export const Default: StoryFn<typeof Accordion> = (args) => (
  <Accordion {...args}>
    <AccordionItem value="item-1">
      <AccordionTrigger>Lorem ipsum dolor sit amet</AccordionTrigger>
      <AccordionContent>
        Aliquam erat volutpat. Vivamus ornare scelerisque elementum. Vestibulum
        erat nibh, interdum sed consequat at, dapibus id leo. Etiam eu velit
        eget lorem iaculis malesuada ut a nibh.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>
        Sed quis velit et ligula luctus efficitur
      </AccordionTrigger>
      <AccordionContent>
        Phasellus efficitur massa id arcu faucibus ornare. Etiam viverra ex eget
        finibus rutrum. Proin accumsan lacus eget tellus finibus, at maximus
        augue varius.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
