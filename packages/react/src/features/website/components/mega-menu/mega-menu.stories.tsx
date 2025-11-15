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
  <MegaMenu>
    <MegaMenuList>
      <MegaMenuItem>
        <MegaMenuTrigger>Getting started</MegaMenuTrigger>
        <MegaMenuContent>
          <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
            <li className="row-span-3">
              <MegaMenuLink asChild>
                <a
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                  <img
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo"
                    alt="Logo"
                    className="w-8 h-8"
                  />
                  <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                  <p className="text-sm leading-tight text-muted-foreground">
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
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
