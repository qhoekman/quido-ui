import { Input } from "@/components/input/input";
import type { StoryObj, Meta } from "@storybook/react-vite";
import { useState } from "react";

export default {
  title: "Components/Data Manipulation/Input",
  component: Input,
  argTypes: {
    type: {
      control: "select",
      options: [
        "text",
        "email",
        "password",
        "number",
        "tel",
        "url",
        "search",
        "date",
        "time",
        "datetime-local",
        "month",
        "week",
        "file",
      ],
    },
    placeholder: {
      control: "text",
    },
    value: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
    readOnly: {
      control: "boolean",
    },
    maxLength: {
      control: "number",
    },
    minLength: {
      control: "number",
    },
  },
  args: {
    placeholder: "Enter your name",
    disabled: false,
    required: false,
    readOnly: false,
  },
} satisfies Meta<typeof Input>;

export const Default: StoryObj<typeof Input> = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ maxWidth: "var(--spacing-48)" }}
      />
    );
  },
};

export const Composition: StoryObj<typeof Input> = {
  render: () => {
    const [email, setEmail] = useState("");
    return (
      <div style={{ maxWidth: "var(--spacing-64)" }}>
        <label
          htmlFor="email"
          style={{
            display: "block",
            fontSize: "var(--font-size-sm)",
            fontWeight: 600,
            marginBottom: "var(--spacing-1-5)",
          }}
        >
          Email address
        </label>
        <Input
          id="email"
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p
          style={{
            margin: "var(--spacing-1-5) 0 0",
            fontSize: "var(--font-size-sm)",
            color: "var(--color-muted-fg)",
          }}
        >
          We'll send a confirmation link to this address.
        </p>
      </div>
    );
  },
};
