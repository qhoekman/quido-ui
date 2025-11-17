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
    className="max-w-md rounded-lg border"
  >
    <ResizablePanel defaultSize={50}>
      <div className="flex h-[200px] items-center justify-center p-6">
        <span className="font-semibold">One</span>
      </div>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel defaultSize={50}>
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Two</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Three</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </ResizablePanel>
  </ResizablePanelGroup>
);
