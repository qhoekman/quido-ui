import { StoryObj, Meta } from "@storybook/react-vite";

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

export const Default: StoryObj<typeof Toggle> = {
  render: (args) => (
    <form>
      <Toggle {...args}>Bold</Toggle>
    </form>
  ),

  args: {
    onPressedChange: (pressed: boolean) => console.log(pressed),
  },
};

export const Composition: StoryObj<typeof Toggle> = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Toggle variant="outline" defaultPressed>
        Bold
      </Toggle>
      <Toggle variant="outline">Italic</Toggle>
      <Toggle variant="outline">Underline</Toggle>
    </div>
  ),
};
