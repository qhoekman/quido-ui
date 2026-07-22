import { StoryObj, Meta } from "@storybook/react-vite";

import { Switch } from "./switch";
import { Label } from "@/components/label/label";
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

export const Default: StoryObj<typeof Switch> = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false);
    return (
      <form
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--spacing-2)",
        }}
      >
        <Switch
          id="notifications"
          {...args}
          checked={checked}
          onCheckedChange={setChecked}
        />
        <Label htmlFor="notifications">Enable notifications</Label>
      </form>
    );
  },
};

export const Composition: StoryObj<typeof Switch> = {
  render: () => {
    const [darkMode, setDarkMode] = useState(true);
    const [emailUpdates, setEmailUpdates] = useState(false);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          maxWidth: "280px",
        }}
      >
        <h3 style={{ margin: 0 }}>Settings</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Label htmlFor="dark-mode">Dark mode</Label>
          <Switch id="dark-mode" checked={darkMode} onCheckedChange={setDarkMode} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Label htmlFor="email-updates">Email updates</Label>
          <Switch
            id="email-updates"
            checked={emailUpdates}
            onCheckedChange={setEmailUpdates}
          />
        </div>
      </div>
    );
  },
};
