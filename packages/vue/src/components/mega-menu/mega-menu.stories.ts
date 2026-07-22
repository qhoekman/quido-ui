import MegaMenuComponent from "./mega-menu.vue";
import MegaMenuDemo from "./mega-menu-demo.vue";
import MegaMenuListComponent from "./mega-menu-list.vue";
import MegaMenuItemComponent from "./mega-menu-item.vue";
import MegaMenuTriggerComponent from "./mega-menu-trigger.vue";
import MegaMenuContentComponent from "./mega-menu-content.vue";
import MegaMenuLinkComponent from "./mega-menu-link.vue";
import MegaMenuListItemComponent from "./mega-menu-list-item.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta = {
  title: "Features/Website/Components/Mega Menu",
  component: MegaMenuComponent,
  argTypes: {
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
      description: "The reading direction of the navigation menu",
    },
    delayDuration: {
      control: "number",
      description:
        "The duration in milliseconds to wait before showing the content",
    },
    skipDelayDuration: {
      control: "number",
      description:
        "The duration in milliseconds to wait before hiding the content when moving to the next item",
    },
  },
  args: {
    delayDuration: 200,
    skipDelayDuration: 300,
    dir: "ltr",
  },
  render: (args) => ({
    components: {
      MegaMenuDemo,
    },
    setup() {
      return { args };
    },
    template: `
      <MegaMenuDemo
        :dir="args.dir"
        :delay-duration="args.delayDuration"
        :skip-delay-duration="args.skipDelayDuration"
      />
    `,
  }),
} satisfies Meta<typeof MegaMenuComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const productCategories = [
  {
    title: "Feedback",
    href: "/docs/components/toast",
    description: "Toasts, callouts, progress bars, and loading indicators."
  },
  {
    title: "Layout",
    href: "/docs/components/stack",
    description: "Stacks, grids, resizable panels, and scroll areas."
  },
  {
    title: "Navigation",
    href: "/docs/components/tabs",
    description: "Tabs, breadcrumbs, steps, and navigation menus."
  },
  {
    title: "Overlay",
    href: "/docs/components/dialog",
    description: "Dialogs, drawers, popovers, and tooltips."
  }
]

export const Composition: Story = {
  render: () => ({
    components: {
      MegaMenuComponent,
      MegaMenuListComponent,
      MegaMenuItemComponent,
      MegaMenuTriggerComponent,
      MegaMenuContentComponent,
      MegaMenuLinkComponent,
      MegaMenuListItemComponent
    },
    setup() {
      return { productCategories }
    },
    template: `
      <MegaMenuComponent :delay-duration="200" :skip-delay-duration="300" style="width: 100%; max-width: 1200px; margin: 0 auto;">
        <MegaMenuListComponent>
          <MegaMenuItemComponent>
            <MegaMenuTriggerComponent>Components</MegaMenuTriggerComponent>
            <MegaMenuContentComponent>
              <ul style="display: grid; width: 500px; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--spacing-3); padding: var(--spacing-4); margin: 0; list-style: none;">
                <MegaMenuListItemComponent
                  v-for="category in productCategories"
                  :key="category.title"
                  :title="category.title"
                  :href="category.href"
                >
                  {{ category.description }}
                </MegaMenuListItemComponent>
              </ul>
            </MegaMenuContentComponent>
          </MegaMenuItemComponent>
          <MegaMenuItemComponent>
            <MegaMenuTriggerComponent>Resources</MegaMenuTriggerComponent>
            <MegaMenuContentComponent>
              <ul style="display: grid; width: 300px; gap: var(--spacing-3); padding: var(--spacing-4); margin: 0; list-style: none;">
                <MegaMenuListItemComponent href="/docs" title="Documentation">
                  Guides and API reference for every component.
                </MegaMenuListItemComponent>
                <MegaMenuListItemComponent href="/changelog" title="Changelog">
                  See what's new in the latest release.
                </MegaMenuListItemComponent>
                <MegaMenuListItemComponent href="https://github.com" title="GitHub">
                  Browse the source and file issues.
                </MegaMenuListItemComponent>
              </ul>
            </MegaMenuContentComponent>
          </MegaMenuItemComponent>
          <MegaMenuItemComponent>
            <MegaMenuLinkComponent href="/pricing">Pricing</MegaMenuLinkComponent>
          </MegaMenuItemComponent>
        </MegaMenuListComponent>
      </MegaMenuComponent>
    `
  })
}
