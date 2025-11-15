import { Meta, StoryFn } from "@storybook/react-vite";

import { Switch } from "./switch";

export default {
  title: "Components/Data Manipulation/Switch",
  component: Switch,
} as Meta<typeof Switch>;

export const Default: StoryFn<typeof Switch> = (args) => (
  <form>
    <Switch {...args}></Switch>
  </form>
);
