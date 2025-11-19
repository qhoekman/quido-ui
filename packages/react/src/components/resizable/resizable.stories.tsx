import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/resizable/resizable";
import type { Meta, StoryFn } from "@storybook/react-vite";

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

export const Default: StoryFn<typeof ResizablePanelGroup> = (args) => (
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
        <span style={{ fontWeight: "var(--font-weight-semibold)" }}>One</span>
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
              Two
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
              Three
            </span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </ResizablePanel>
  </ResizablePanelGroup>
);
