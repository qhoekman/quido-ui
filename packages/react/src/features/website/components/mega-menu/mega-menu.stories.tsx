import {
  MegaMenu,
  MegaMenuContent,
  MegaMenuItem,
  MegaMenuLink,
  MegaMenuList,
  MegaMenuListItem,
  MegaMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/features/website/components/mega-menu/mega-menu";
import type { Meta, StoryFn } from "@storybook/react-vite";

export default {
  title: "Features/Website/Components/Mega Menu",
  component: MegaMenu,
  argTypes: {
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
      description: "The reading direction of the navigation menu",
    },
    delayDuration: {
      control: "number",
      description: "The duration in milliseconds to wait before showing the content",
    },
    skipDelayDuration: {
      control: "number",
      description: "The duration in milliseconds to wait before hiding the content when moving to the next item",
    },
  },
  args: {
    delayDuration: 200,
    skipDelayDuration: 300,
  },
} satisfies Meta<typeof MegaMenu>;

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export const Default: StoryFn<typeof MegaMenu> = (args) => (
  <MegaMenu {...args}>
    <MegaMenuList>
      <MegaMenuItem>
        <MegaMenuTrigger>Getting started</MegaMenuTrigger>
        <MegaMenuContent>
          <ul
            style={{
              display: "grid",
              gap: "var(--spacing-3)",
              padding: "var(--spacing-4)",
              "@media (min-width: 768px)": {
                width: "400px",
              },
              "@media (min-width: 1024px)": {
                width: "500px",
                gridTemplateColumns: ".75fr 1fr",
              },
            }}
          >
            <li style={{ gridRow: "span 3 / span 3" }}>
              <MegaMenuLink asChild>
                <a
                  style={{
                    display: "flex",
                    height: "100%",
                    width: "100%",
                    userSelect: "none",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    borderRadius: "var(--border-radius-md)",
                    background:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.1))",
                    padding: "var(--spacing-6)",
                    textDecoration: "none",
                    outline: "none",
                  }}
                  href="/"
                >
                  <img
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo"
                    alt="Logo"
                    style={{
                      width: "var(--spacing-8)",
                      height: "var(--spacing-8)",
                    }}
                  />
                  <div
                    style={{
                      marginBottom: "var(--spacing-2)",
                      marginTop: "var(--spacing-4)",
                      fontSize: "var(--font-size-lg)",
                      fontWeight: "var(--font-weight-medium)",
                    }}
                  >
                    shadcn/ui
                  </div>
                  <p
                    style={{
                      fontSize: "var(--font-size-sm)",
                      lineHeight: "var(--line-height-tight)",
                      color: "var(--color-muted-fg)",
                    }}
                  >
                    Beautifully designed components built with Radix UI and
                    Tailwind CSS.
                  </p>
                </a>
              </MegaMenuLink>
            </li>
            <MegaMenuListItem href="/docs" title="Introduction">
              Re-usable components built using Radix UI and Tailwind CSS.
            </MegaMenuListItem>
            <MegaMenuListItem href="/docs/installation" title="Installation">
              How to install dependencies and structure your app.
            </MegaMenuListItem>
            <MegaMenuListItem
              href="/docs/primitives/typography"
              title="Typography"
            >
              Styles for headings, paragraphs, lists...etc
            </MegaMenuListItem>
          </ul>
        </MegaMenuContent>
      </MegaMenuItem>
      <MegaMenuItem>
        <MegaMenuTrigger>Components</MegaMenuTrigger>
        <MegaMenuContent>
          <ul
            style={{
              display: "grid",
              width: "400px",
              gap: "var(--spacing-3)",
              padding: "var(--spacing-4)",
              "@media (min-width: 768px)": {
                width: "500px",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              },
              "@media (min-width: 1024px)": {
                width: "600px",
              },
            }}
          >
            {components.map((component) => (
              <MegaMenuListItem
                key={component.title}
                title={component.title}
                href={component.href}
              >
                {component.description}
              </MegaMenuListItem>
            ))}
          </ul>
        </MegaMenuContent>
      </MegaMenuItem>
      <MegaMenuItem>
        <MegaMenuLink className={navigationMenuTriggerStyle()}>
          Documentation
        </MegaMenuLink>
      </MegaMenuItem>
    </MegaMenuList>
  </MegaMenu>
);
