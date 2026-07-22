import { StoryObj, Meta } from "@storybook/react-vite";

import { Separator } from "./separator";

export default {
  title: "Components/Layout/Separator",
  component: Separator,
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    decorative: {
      control: "boolean",
    },
  },
  args: {
    orientation: "horizontal",
    decorative: true,
  },
} satisfies Meta<typeof Separator>;

export const Default: StoryObj<typeof Separator> = {
  render: (args) => (
    <div style={{ width: "260px" }}>
      <h4 style={{ margin: "0 0 var(--spacing-1)", fontSize: "var(--font-size-sm)" }}>
        Account
      </h4>
      <p style={{ margin: 0, fontSize: "var(--font-size-sm)", color: "var(--color-muted-fg)" }}>
        Manage your profile and preferences.
      </p>
      <Separator {...args} style={{ margin: "var(--spacing-4) 0" }}></Separator>
      <h4 style={{ margin: "0 0 var(--spacing-1)", fontSize: "var(--font-size-sm)" }}>
        Notifications
      </h4>
      <p style={{ margin: 0, fontSize: "var(--font-size-sm)", color: "var(--color-muted-fg)" }}>
        Choose what you want to be notified about.
      </p>
    </div>
  ),
};

export const Composition: StoryObj<typeof Separator> = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-3)", height: "24px" }}>
      <span style={{ fontSize: "var(--font-size-sm)" }}>Bold</span>
      <Separator orientation="vertical" decorative />
      <span style={{ fontSize: "var(--font-size-sm)" }}>Italic</span>
      <Separator orientation="vertical" decorative />
      <span style={{ fontSize: "var(--font-size-sm)" }}>Underline</span>
    </div>
  ),
};
