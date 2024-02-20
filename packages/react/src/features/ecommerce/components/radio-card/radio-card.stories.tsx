import {
  RadioCard,
  RadioCardItem,
  RadioCardItemDescription,
  RadioCardItemLabel,
} from "@/features/ecommerce/components/radio-card/radio-card";
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Features/Ecommerce/Components/Radio Card",
  component: RadioCard,
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
