import { Meta, StoryFn } from "@storybook/react-vite";

import { Switch } from "./switch";

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

export const Default: StoryFn<typeof Switch> = (args) => (
  <form>
    <Switch {...args}></Switch>
  </form>
);
