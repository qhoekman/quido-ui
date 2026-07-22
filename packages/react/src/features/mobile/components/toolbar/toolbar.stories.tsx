import {
  Toolbar,
  ToolbarContent,
  ToolbarLink,
} from "@/features/mobile/components/toolbar/toolbar";
import { ViewportLayout } from "@/features/mobile/layouts/viewport/viewport";
import type { StoryObj, Meta } from "@storybook/react-vite";

export default {
  title: "Features/Mobile/Components/Toolbar",
  component: Toolbar,
} satisfies Meta<typeof Toolbar>;

export const Default: StoryObj = {
  render: (args) => (
    <ViewportLayout>
      <Toolbar {...args}>
        <ToolbarContent>
          <ToolbarLink href="#">Home</ToolbarLink>
          <ToolbarLink href="#">Search</ToolbarLink>
          <ToolbarLink href="#">Profile</ToolbarLink>
        </ToolbarContent>
      </Toolbar>
    </ViewportLayout>
  ),

  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile2",
    },
  },
};

export const WithText: StoryObj = {
  render: (args) => (
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
  ),

  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile2",
    },
  },
};

const TAB_ICON_PATHS = {
  Home: (
    <>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 22V12h6v10" />
    </>
  ),
  Search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </>
  ),
  Create: (
    <>
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </>
  ),
  Activity: (
    <>
      <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </>
  ),
  Profile: (
    <>
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
    </>
  ),
};

export const Composition: StoryObj = {
  render: () => (
    <ViewportLayout>
      <Toolbar>
        <ToolbarContent>
          {Object.entries(TAB_ICON_PATHS).map(([label, path]) => (
            <ToolbarLink key={label} href="#">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "var(--spacing-1)",
                }}
              >
                <svg
                  style={{
                    width: "var(--spacing-5)",
                    height: "var(--spacing-5)",
                  }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  {path}
                </svg>
                <span style={{ fontSize: "var(--font-size-xs)" }}>
                  {label}
                </span>
              </div>
            </ToolbarLink>
          ))}
        </ToolbarContent>
      </Toolbar>
    </ViewportLayout>
  ),

  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile2",
    },
  },
};

export const WithIcons: StoryObj = {
  render: (args) => (
    <ViewportLayout>
      <Toolbar {...args}>
        <ToolbarContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <ToolbarLink key={index} href="#">
              <svg
                style={{
                  width: "var(--spacing-6)",
                  height: "var(--spacing-6)",
                }}
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
  ),

  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile2",
    },
  },
};
