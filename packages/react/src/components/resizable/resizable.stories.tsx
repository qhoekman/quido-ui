import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/resizable/resizable";
import type { StoryObj, Meta } from "@storybook/react-vite";

export default {
  title: "Components/Layout/Resizable",
  component: ResizablePanelGroup,
  argTypes: {
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
  args: {
    direction: "horizontal",
  },
} satisfies Meta<typeof ResizablePanelGroup>;

export const Default: StoryObj<typeof ResizablePanelGroup> = {
  render: (args) => (
    <ResizablePanelGroup
      {...args}
      style={{
        maxWidth: "var(--spacing-md)",
        borderRadius: "var(--border-radius-lg)",
        border: "var(--border-width-default) solid var(--color-border)",
      }}
    >
      <ResizablePanel defaultSize={50}>
        <div
          style={{
            display: "flex",
            height: "200px",
            alignItems: "center",
            justifyContent: "center",
            padding: "var(--spacing-6)",
          }}
        >
          <span style={{ fontWeight: "var(--font-weight-semibold)" }}>Explorer</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div
              style={{
                display: "flex",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                padding: "var(--spacing-6)",
              }}
            >
              <span style={{ fontWeight: "var(--font-weight-semibold)" }}>
                Editor
              </span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div
              style={{
                display: "flex",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                padding: "var(--spacing-6)",
              }}
            >
              <span style={{ fontWeight: "var(--font-weight-semibold)" }}>
                Terminal
              </span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const Composition: StoryObj<typeof ResizablePanelGroup> = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      style={{
        maxWidth: "var(--spacing-md)",
        height: "260px",
        borderRadius: "var(--border-radius-lg)",
        border: "var(--border-width-default) solid var(--color-border)",
      }}
    >
      <ResizablePanel defaultSize={30}>
        <div style={{ padding: "var(--spacing-4)" }}>
          <h4 style={{ margin: "0 0 var(--spacing-2)", fontSize: "var(--font-size-sm)" }}>
            Chapters
          </h4>
          <ul style={{ margin: 0, paddingLeft: "var(--spacing-4)", fontSize: "var(--font-size-sm)", color: "var(--color-muted-fg)" }}>
            <li>Introduction</li>
            <li>Getting started</li>
            <li>Advanced usage</li>
          </ul>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={70}>
        <div style={{ padding: "var(--spacing-4)" }}>
          <h3 style={{ margin: "0 0 var(--spacing-2)" }}>Getting started</h3>
          <p style={{ margin: 0, fontSize: "var(--font-size-sm)", color: "var(--color-muted-fg)" }}>
            Drag the divider to resize the chapter list and reading pane.
          </p>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};
