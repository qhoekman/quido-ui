import { Meta, StoryFn } from "@storybook/react";

import { Label } from "@/components/label/label";

import { RadioGroup, RadioGroupItem } from "./radio-group";

export default {
  title: "Components/Data Manipulation/Radio Group",
  component: RadioGroup,
} as Meta<typeof RadioGroup>;

export const Default: StoryFn<typeof RadioGroup> = (args) => (
  <form>
    <RadioGroup defaultValue="option-one" {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  </form>
);
