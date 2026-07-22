import type { Meta, StoryObj } from "@storybook/react-vite";

import { ScrollArea } from "./scroll-area";

export default {
  title: "Components/Layout/Scroll Area",
  component: ScrollArea,
  argTypes: {
    type: {
      control: "select",
      options: ["auto", "always", "scroll", "hover"],
      description: "Controls when scrollbars appear",
    },
  },
  args: {
    type: "auto",
  },
} satisfies Meta<typeof ScrollArea>;

export const Default: StoryObj<typeof ScrollArea> = {
  render: (args) => (
    <ScrollArea
      style={{
        height: "200px",
        width: "350px",
        borderRadius: "var(--border-radius-md)",
        border: "var(--border-width-default) solid var(--color-border)",
      }}
      {...args}
    >
      <div style={{ padding: "var(--spacing-4)" }}>
        <h4
          style={{
            marginBottom: "var(--spacing-4)",
            fontSize: "var(--font-size-sm)",
            fontWeight: "var(--font-weight-medium)",
          }}
        >
          Tags
        </h4>
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} style={{ fontSize: "var(--font-size-sm)" }}>
            Tag {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Composition: StoryObj<typeof ScrollArea> = {
  render: () => (
    <div
      style={{
        width: "350px",
        border: "var(--border-width-default) solid var(--color-border)",
        borderRadius: "var(--border-radius-lg)",
      }}
    >
      <div
        style={{
          padding: "var(--spacing-4)",
          borderBottom: "var(--border-width-default) solid var(--color-border)",
          fontWeight: "var(--font-weight-semibold)",
        }}
      >
        Release notes
      </div>
      <ScrollArea style={{ height: "200px" }}>
        <div style={{ padding: "var(--spacing-4)", display: "flex", flexDirection: "column", gap: "var(--spacing-4)" }}>
          {[
            { version: "v2.4.0", date: "2026-06-12", note: "Added dark mode support across all components." },
            { version: "v2.3.1", date: "2026-05-28", note: "Fixed a focus-trap bug in the dialog component." },
            { version: "v2.3.0", date: "2026-05-10", note: "Introduced the new data table with sorting and filtering." },
            { version: "v2.2.0", date: "2026-04-22", note: "Improved keyboard navigation in the combobox." },
            { version: "v2.1.0", date: "2026-04-01", note: "Added the toast and toaster components." },
          ].map((entry) => (
            <div key={entry.version}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--font-size-sm)", fontWeight: "var(--font-weight-medium)" }}>
                <span>{entry.version}</span>
                <span style={{ color: "var(--color-muted-fg)" }}>{entry.date}</span>
              </div>
              <p style={{ margin: "var(--spacing-1) 0 0", fontSize: "var(--font-size-sm)", color: "var(--color-muted-fg)" }}>
                {entry.note}
              </p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  ),
};
