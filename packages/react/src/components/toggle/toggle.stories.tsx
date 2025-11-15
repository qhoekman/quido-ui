import { Meta, StoryFn } from "@storybook/react-vite";

import { Toggle } from "./toggle";

export default {
  title: "Components/Data Manipulation/Toggle",
  component: Toggle,
} as Meta<typeof Toggle>;

export const Default: StoryFn<typeof Toggle> = (args) => (
  <form>
    <Toggle {...args}>Toggle</Toggle>
  </form>
);
Default.args = {
  onPressedChange: (pressed: boolean) => console.log(pressed),
};
