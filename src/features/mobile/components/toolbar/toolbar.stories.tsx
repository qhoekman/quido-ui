import {
  Toolbar,
  ToolbarContent,
  ToolbarLink,
} from "@/features/mobile/components/toolbar/toolbar";
import { ViewportLayout } from "@/features/mobile/layouts/viewport/viewport";
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Features/Mobile/Components/Toolbar",
  component: Toolbar,
} as Meta<typeof Toolbar>;

export const WithText: StoryFn = (args) => (
  <ViewportLayout>
    <Toolbar {...args}>
      <ToolbarContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <ToolbarLink key={index} href="#">
            {index + 1}
          </ToolbarLink>
        ))}
      </ToolbarContent>
    </Toolbar>
  </ViewportLayout>
);
WithText.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "mobile2",
  },
};

export const WithIcons: StoryFn = (args) => (
  <ViewportLayout>
    <Toolbar {...args}>
      <ToolbarContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <ToolbarLink key={index} href="#">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </ToolbarLink>
        ))}
      </ToolbarContent>
    </Toolbar>
  </ViewportLayout>
);

WithIcons.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "mobile2",
  },
};
