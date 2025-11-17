import { Meta, StoryFn } from "@storybook/react-vite";

import { Label } from "@/components/label/label";

import { RadioGroup, RadioGroupItem } from "./radio-group";

export default {
  title: "Components/Data Manipulation/Radio Group",
  component: RadioGroup,
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
    defaultValue: "option-one",
    disabled: false,
    required: false,
  },
} satisfies Meta<typeof RadioGroup>;

export const Default: StoryFn<typeof RadioGroup> = (args) => (
  <form>
    <RadioGroup {...args}>
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
