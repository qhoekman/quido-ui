import { Checkbox, CheckboxLabel } from "@/components/checkbox/checkbox";
import { Label } from "@/components/label/label";
import type { StoryObj, Meta } from "@storybook/react-vite";
import { useState } from "react";

export default {
  title: "Components/Data Manipulation/Checkbox",
  component: Checkbox,
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
} satisfies Meta<typeof Checkbox>;

export const Default: StoryObj<typeof Checkbox> = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false);
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--spacing-2)",
        }}
      >
        <Checkbox
          id="terms"
          {...args}
          checked={checked}
          onCheckedChange={setChecked}
        />
        <CheckboxLabel htmlFor="terms">
          Accept terms and conditions
        </CheckboxLabel>
      </div>
    );
  },
};

export const Composition: StoryObj<typeof Checkbox> = {
  render: () => {
    const [email, setEmail] = useState(true);
    const [sms, setSms] = useState(false);
    const [push, setPush] = useState(true);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          maxWidth: "280px",
        }}
      >
        <h3 style={{ margin: 0 }}>Notification Preferences</h3>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Checkbox id="email" checked={email} onCheckedChange={setEmail} />
          <CheckboxLabel htmlFor="email">Email notifications</CheckboxLabel>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Checkbox id="sms" checked={sms} onCheckedChange={setSms} />
          <CheckboxLabel htmlFor="sms">SMS notifications</CheckboxLabel>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Checkbox id="push" checked={push} onCheckedChange={setPush} />
          <CheckboxLabel htmlFor="push">Push notifications</CheckboxLabel>
        </div>
      </div>
    );
  },
};
