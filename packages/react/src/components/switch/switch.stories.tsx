import { Meta, StoryFn } from "@storybook/react-vite";

import { Switch } from "./switch";
import { useState } from "react";

export default {
  title: "Components/Data Manipulation/Switch",
  component: Switch,
  argTypes: {
    checked: {
      control: "boolean",
    },
    defaultChecked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
    name: {
      control: "text",
    },
    value: {
      control: "text",
    },
  },
  args: {
    checked: false,
    disabled: false,
    required: false,
  },
} satisfies Meta<typeof Switch>;

export const Default: StoryFn<typeof Switch> = (args) => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return (
    <form>
      <Switch {...args} checked={checked} onCheckedChange={setChecked} />
    </form>
  );
};
