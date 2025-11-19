import { Block, BlockTitle } from "@/features/mobile/components/block/block";
import {
  Navbar,
  NavbarBack,
  NavbarContent,
  NavbarLink,
  NavbarSubtitle,
  NavbarTitle,
} from "@/features/mobile/components/navbar/navbar";
import {
  Toolbar,
  ToolbarContent,
  ToolbarLink,
} from "@/features/mobile/components/toolbar/toolbar";
import { ViewportLayout } from "@/features/mobile/layouts/viewport/viewport";
import type { Meta, StoryFn } from "@storybook/react-vite";

export default {
  title: "Features/Mobile/Layouts/Viewport",
  component: ViewportLayout,
} satisfies Meta<typeof ViewportLayout>;

export const Default: StoryFn<typeof ViewportLayout> = (args) => (
  <ViewportLayout {...args}>
    <Navbar>
      <NavbarContent>
        <NavbarBack href="#" />
        <NavbarTitle>
          Navbar
          <NavbarSubtitle>Subtitle</NavbarSubtitle>
        </NavbarTitle>
        <NavbarLink href="#">Link</NavbarLink>
      </NavbarContent>
    </Navbar>
    <div style={{ position: "relative" }}>
      <BlockTitle>Block</BlockTitle>
      <Block
        style={{
          marginLeft: "var(--spacing-4)",
          marginRight: "var(--spacing-4)",
        }}
      >
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.
        </p>
      </Block>
    </div>
    <Toolbar>
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
);

Default.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "mobile2",
  },
};
