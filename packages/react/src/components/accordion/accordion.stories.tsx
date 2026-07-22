import { StoryObj, Meta } from "@storybook/react-vite";

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
      description:
        "Determines whether one or multiple items can be opened at the same time",
    },
    collapsible: {
      control: "boolean",
      description:
        "When type is 'single', allows closing an open item by clicking it again",
    },
    disabled: {
      control: "boolean",
      description:
        "When true, prevents the user from interacting with the accordion",
    },
    defaultValue: {
      control: "text",
      description:
        "The value of the item that should be open when initially rendered (uncontrolled)",
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

export const Default: StoryObj<typeof Accordion> = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is your refund policy?</AccordionTrigger>
        <AccordionContent>
          You can request a full refund within 30 days of purchase, no
          questions asked.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Do you offer team plans?</AccordionTrigger>
        <AccordionContent>
          Yes, team plans start at 5 seats and include centralized billing
          and admin controls.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Composition: StoryObj<typeof Accordion> = {
  render: () => (
    <div style={{ maxWidth: "32rem" }}>
      <h3 style={{ margin: "0 0 1rem" }}>Frequently Asked Questions</h3>
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is your refund policy?</AccordionTrigger>
          <AccordionContent>
            You can request a full refund within 30 days of purchase, no
            questions asked.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Do you offer team plans?</AccordionTrigger>
          <AccordionContent>
            Yes, team plans start at 5 seats and include centralized billing
            and admin controls.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I cancel anytime?</AccordionTrigger>
          <AccordionContent>
            Absolutely. Cancel your subscription anytime from your account
            settings — no cancellation fees.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
