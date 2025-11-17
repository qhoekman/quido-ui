import { Meta, StoryFn } from "@storybook/react-vite";

import { Toggle } from "./toggle";

export default {
  title: "Components/Data Manipulation/Toggle",
  component: Toggle,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "outline"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    variant: "primary",
    size: "md",
    disabled: false,
  },
} satisfies Meta<typeof Toggle>;

export const Default: StoryFn<typeof Toggle> = (args) => (
  <form>
    <Toggle {...args}>Toggle</Toggle>
  </form>
);
Default.args = {
  onPressedChange: (pressed: boolean) => console.log(pressed),
};
