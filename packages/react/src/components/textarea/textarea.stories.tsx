import { Textarea } from "@/components/textarea/textarea";
import type { StoryObj, Meta } from "@storybook/react-vite";
import { useState } from "react";

export default {
  title: "Components/Data Manipulation/Textarea",
  component: Textarea,
  argTypes: {
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    readOnly: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
    value: {
      control: "text",
    },
    rows: {
      control: "number",
    },
    cols: {
      control: "number",
    },
    maxLength: {
      control: "number",
    },
    minLength: {
      control: "number",
    },
  },
  args: {
    placeholder: "Enter your message",
    disabled: false,
    readOnly: false,
    required: false,
  },
} satisfies Meta<typeof Textarea>;

export const Default: StoryObj<typeof Textarea> = {
  render: (args) => {
    const [value, setValue] = useState(args.value ?? "");
    return (
      <div style={{ maxWidth: "var(--spacing-48)" }}>
        <Textarea
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  },

  args: {
    value:
      "The new dashboard is much easier to navigate, but I'd love to see dark mode support added soon.",
    placeholder: "Enter your message",
  },
};

export const Composition: StoryObj<typeof Textarea> = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div style={{ maxWidth: "var(--spacing-64)" }}>
        <label
          htmlFor="bio"
          style={{
            display: "block",
            fontSize: "var(--font-size-sm)",
            fontWeight: 600,
            marginBottom: "var(--spacing-1-5)",
          }}
        >
          Bio
        </label>
        <Textarea
          id="bio"
          placeholder="Tell us a little about yourself..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={4}
        />
        <p
          style={{
            margin: "var(--spacing-1-5) 0 0",
            fontSize: "var(--font-size-sm)",
            color: "var(--color-muted-fg)",
          }}
        >
          This appears on your public profile. Max 200 characters.
        </p>
      </div>
    );
  },
};
