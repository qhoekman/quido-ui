import {
  RadioCard,
  RadioCardItem,
  RadioCardItemDescription,
  RadioCardItemLabel,
} from "@/features/ecommerce/components/radio-card/radio-card";
import type { Meta, StoryFn } from "@storybook/react-vite";

export default {
  title: "Features/Ecommerce/Components/Radio Card",
  component: RadioCard,
  argTypes: {
    defaultValue: {
      control: "text",
      description: "The value of the radio item that should be checked when initially rendered",
    },
    value: {
      control: "text",
      description: "The controlled value of the radio group",
    },
    disabled: {
      control: "boolean",
      description: "When true, prevents the user from interacting with the radio group",
    },
    required: {
      control: "boolean",
      description: "When true, indicates that the user must select a value before submitting",
    },
    name: {
      control: "text",
      description: "The name of the group, submitted as a name/value pair with form data",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The orientation of the component",
    },
  },
  args: {
    defaultValue: "sm",
    disabled: false,
    required: false,
  },
} satisfies Meta<typeof RadioCard>;

const sizes = ["xs", "sm", "md", "lg", "xl"];
const deliveryMethods = ["Standard", "Next Day"];

export const Default: StoryFn<typeof RadioCard> = (args) => (
  <div className="max-w-md w-full">
    <RadioCard className="grid-cols-6" {...args}>
      {sizes.map((size) => (
        <RadioCardItem
          value={size}
          id={`opt-${size}`}
          key={size}
          disabled={size === "xs"}
        >
          <RadioCardItemLabel htmlFor={`opt-${size}`}>
            {size.toUpperCase()}
          </RadioCardItemLabel>
        </RadioCardItem>
      ))}
    </RadioCard>
  </div>
);

export const Large: StoryFn<typeof RadioCard> = (args) => (
  <div className="max-w-sm w-full">
    <RadioCard className="grid-cols-2" {...args}>
      {deliveryMethods.map((size) => (
        <RadioCardItem
          value={size}
          id={`opt-${size}`}
          key={size}
          className="items-start"
          disabled={size === "Standard"}
        >
          <RadioCardItemLabel htmlFor={`opt-${size}`}>
            {size.toUpperCase()}
          </RadioCardItemLabel>
          <RadioCardItemDescription>
            Get it in 3-5 business days
          </RadioCardItemDescription>
        </RadioCardItem>
      ))}
    </RadioCard>
  </div>
);
