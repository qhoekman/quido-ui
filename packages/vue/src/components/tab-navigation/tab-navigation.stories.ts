import TabNavigationComponent from "./tab-navigation.vue";
import TabNavigationItemComponent from "./tab-navigation-item.vue";
import TabNavigationLinkComponent from "./tab-navigation-link.vue";
import TabNavigationIndicatorComponent from "./tab-navigation-indicator.vue";
import TabNavigationRailComponent from "./tab-navigation-rail.vue";
import TabNavigationMenuComponent from "./tab-navigation-menu.vue";
import TabNavigationMenugroupComponent from "./tab-navigation-menugroup.vue";
import TabNavigationMenuitemComponent from "./tab-navigation-menuitem.vue";
import TabNavigationSeparatorComponent from "./tab-navigation-separator.vue";
import { DropdownMenuRoot, DropdownMenuTrigger } from "reka-ui";
import { Home } from "lucide-vue-next";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta = {
  title: "Components/Navigation/Tab Navigation",
  component: TabNavigationComponent,
  argTypes: {},
  args: {},
  render: (args: any) => ({
    components: {
      TabNavigationComponent,
      TabNavigationItemComponent,
      TabNavigationLinkComponent,
      TabNavigationIndicatorComponent,
      TabNavigationRailComponent,
      TabNavigationMenuComponent,
      TabNavigationMenugroupComponent,
      TabNavigationMenuitemComponent,
      TabNavigationSeparatorComponent,
      DropdownMenuRoot,
      DropdownMenuTrigger,
      Home,
    },
    setup() {
      return { args };
    },
    template: `
      <div style="padding: 2rem;">
        <TabNavigationComponent v-bind="args">
          <TabNavigationItemComponent>
            <TabNavigationLinkComponent state="active">
              <Home :size="16" />
              Home
            </TabNavigationLinkComponent>
          </TabNavigationItemComponent>
          <TabNavigationItemComponent>
            <DropdownMenuRoot>
              <DropdownMenuTrigger as-child>
                <TabNavigationLinkComponent>
                  Balances
                  <TabNavigationIndicatorComponent />
                </TabNavigationLinkComponent>
              </DropdownMenuTrigger>
              <TabNavigationMenuComponent>
                <TabNavigationMenugroupComponent>
                  <TabNavigationMenuitemComponent>View Balance</TabNavigationMenuitemComponent>
                  <TabNavigationMenuitemComponent>Transfer Funds</TabNavigationMenuitemComponent>
                  <TabNavigationMenuitemComponent>Deposit</TabNavigationMenuitemComponent>
                  <TabNavigationMenuitemComponent>Withdraw</TabNavigationMenuitemComponent>
                </TabNavigationMenugroupComponent>
                <TabNavigationSeparatorComponent />
                <TabNavigationMenugroupComponent>
                  <TabNavigationMenuitemComponent>Transaction History</TabNavigationMenuitemComponent>
                  <TabNavigationMenuitemComponent>Account Settings</TabNavigationMenuitemComponent>
                  <TabNavigationMenuitemComponent>Support</TabNavigationMenuitemComponent>
                </TabNavigationMenugroupComponent>
              </TabNavigationMenuComponent>
            </DropdownMenuRoot>
          </TabNavigationItemComponent>
          <TabNavigationItemComponent>
            <DropdownMenuRoot>
              <DropdownMenuTrigger as-child>
                <TabNavigationLinkComponent>
                  Transactions
                </TabNavigationLinkComponent>
              </DropdownMenuTrigger>
              <TabNavigationMenuComponent>
                <TabNavigationMenugroupComponent>
                  <TabNavigationMenuitemComponent>Recent</TabNavigationMenuitemComponent>
                  <TabNavigationMenuitemComponent>All</TabNavigationMenuitemComponent>
                </TabNavigationMenugroupComponent>
              </TabNavigationMenuComponent>
            </DropdownMenuRoot>
          </TabNavigationItemComponent>
          <TabNavigationItemComponent>
            <TabNavigationLinkComponent>
              Messages
              <span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 9999px; background-color: var(--color-danger); color: var(--color-danger-fg); font-size: 10px; font-weight: 600; margin-left: var(--spacing-1);">1</span>
            </TabNavigationLinkComponent>
          </TabNavigationItemComponent>
          <TabNavigationItemComponent>
            <TabNavigationLinkComponent disabled>
              Support
            </TabNavigationLinkComponent>
          </TabNavigationItemComponent>
          <TabNavigationRailComponent />
        </TabNavigationComponent>
      </div>
    `,
  }),
} satisfies Meta<typeof TabNavigationComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Link: Story = {
  render: (args: any) => ({
    components: {
      TabNavigationComponent,
      TabNavigationItemComponent,
      TabNavigationLinkComponent,
      TabNavigationIndicatorComponent,
      TabNavigationRailComponent,
      TabNavigationMenuComponent,
      TabNavigationMenugroupComponent,
      TabNavigationMenuitemComponent,
      TabNavigationSeparatorComponent,
      DropdownMenuRoot,
      DropdownMenuTrigger,
      Home,
    },
    setup() {
      return { args };
    },
    template: `
      <div style="padding: 2rem;">
        <TabNavigationComponent>
          <TabNavigationItemComponent>
            <TabNavigationLinkComponent state="active">
              <Home :size="16" />
              Home
            </TabNavigationLinkComponent>
          </TabNavigationItemComponent>
          <TabNavigationItemComponent>
            <DropdownMenuRoot>
              <DropdownMenuTrigger as-child>
                <TabNavigationLinkComponent>
                  Balances
                  <TabNavigationIndicatorComponent />
                </TabNavigationLinkComponent>
              </DropdownMenuTrigger>
              <TabNavigationMenuComponent>
                <TabNavigationMenugroupComponent>
                  <TabNavigationMenuitemComponent>View Balance</TabNavigationMenuitemComponent>
                  <TabNavigationMenuitemComponent>Transfer Funds</TabNavigationMenuitemComponent>
                  <TabNavigationMenuitemComponent>Deposit</TabNavigationMenuitemComponent>
                  <TabNavigationMenuitemComponent>Withdraw</TabNavigationMenuitemComponent>
                </TabNavigationMenugroupComponent>
                <TabNavigationSeparatorComponent />
                <TabNavigationMenugroupComponent>
                  <TabNavigationMenuitemComponent>Transaction History</TabNavigationMenuitemComponent>
                  <TabNavigationMenuitemComponent>Account Settings</TabNavigationMenuitemComponent>
                  <TabNavigationMenuitemComponent>Support</TabNavigationMenuitemComponent>
                </TabNavigationMenugroupComponent>
              </TabNavigationMenuComponent>
            </DropdownMenuRoot>
          </TabNavigationItemComponent>
          <TabNavigationItemComponent>
            <DropdownMenuRoot>
              <DropdownMenuTrigger as-child>
                <TabNavigationLinkComponent>
                  Transactions
                </TabNavigationLinkComponent>
              </DropdownMenuTrigger>
              <TabNavigationMenuComponent>
                <TabNavigationMenugroupComponent>
                  <TabNavigationMenuitemComponent>Recent</TabNavigationMenuitemComponent>
                  <TabNavigationMenuitemComponent>All</TabNavigationMenuitemComponent>
                </TabNavigationMenugroupComponent>
              </TabNavigationMenuComponent>
            </DropdownMenuRoot>
          </TabNavigationItemComponent>
          <TabNavigationItemComponent>
            <TabNavigationLinkComponent>
              Messages
              <span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 9999px; background-color: var(--color-danger); color: var(--color-danger-fg); font-size: 10px; font-weight: 600; margin-left: var(--spacing-1);">1</span>
            </TabNavigationLinkComponent>
          </TabNavigationItemComponent>
          <TabNavigationItemComponent>
            <TabNavigationLinkComponent disabled>
              Support
            </TabNavigationLinkComponent>
          </TabNavigationItemComponent>
          <TabNavigationRailComponent />
        </TabNavigationComponent>
      </div>
    `,
  }),
};

export const Border: Story = {
  render: (args: any) => ({
    components: {
      TabNavigationComponent,
      TabNavigationItemComponent,
      TabNavigationLinkComponent,
      TabNavigationIndicatorComponent,
      TabNavigationMenuComponent,
      TabNavigationMenugroupComponent,
      TabNavigationMenuitemComponent,
      TabNavigationSeparatorComponent,
      DropdownMenuRoot,
      DropdownMenuTrigger,
      Home,
    },
    setup() {
      return { args };
    },
    template: `
      <div style="padding: 2rem;">
        <TabNavigationComponent gap="sm">
          <TabNavigationItemComponent>
            <TabNavigationLinkComponent variant="border" state="active">
              <Home :size="16" />
              Home
            </TabNavigationLinkComponent>
          </TabNavigationItemComponent>
          <TabNavigationItemComponent>
            <DropdownMenuRoot>
              <DropdownMenuTrigger as-child>
                <TabNavigationLinkComponent variant="border">
                  Balances
                  <TabNavigationIndicatorComponent />
                </TabNavigationLinkComponent>
              </DropdownMenuTrigger>
              <TabNavigationMenuComponent>
                <TabNavigationMenugroupComponent>
                  <TabNavigationMenuitemComponent>View Balance</TabNavigationMenuitemComponent>
                  <TabNavigationMenuitemComponent>Transfer Funds</TabNavigationMenuitemComponent>
                  <TabNavigationMenuitemComponent>Deposit</TabNavigationMenuitemComponent>
                  <TabNavigationMenuitemComponent>Withdraw</TabNavigationMenuitemComponent>
                </TabNavigationMenugroupComponent>
                <TabNavigationSeparatorComponent />
                <TabNavigationMenugroupComponent>
                  <TabNavigationMenuitemComponent>Transaction History</TabNavigationMenuitemComponent>
                  <TabNavigationMenuitemComponent>Account Settings</TabNavigationMenuitemComponent>
                  <TabNavigationMenuitemComponent>Support</TabNavigationMenuitemComponent>
                </TabNavigationMenugroupComponent>
              </TabNavigationMenuComponent>
            </DropdownMenuRoot>
          </TabNavigationItemComponent>
          <TabNavigationItemComponent>
            <DropdownMenuRoot>
              <DropdownMenuTrigger as-child>
                <TabNavigationLinkComponent variant="border">
                  Transactions
                </TabNavigationLinkComponent>
              </DropdownMenuTrigger>
              <TabNavigationMenuComponent>
                <TabNavigationMenugroupComponent>
                  <TabNavigationMenuitemComponent>Recent</TabNavigationMenuitemComponent>
                  <TabNavigationMenuitemComponent>All</TabNavigationMenuitemComponent>
                </TabNavigationMenugroupComponent>
              </TabNavigationMenuComponent>
            </DropdownMenuRoot>
          </TabNavigationItemComponent>
          <TabNavigationItemComponent>
            <TabNavigationLinkComponent variant="border">
              Messages
              <span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 9999px; background-color: var(--color-danger); color: var(--color-danger-fg); font-size: 10px; font-weight: 600; margin-left: var(--spacing-1);">1</span>
            </TabNavigationLinkComponent>
          </TabNavigationItemComponent>
          <TabNavigationItemComponent>
            <TabNavigationLinkComponent variant="border" disabled>
              Support
            </TabNavigationLinkComponent>
          </TabNavigationItemComponent>
        </TabNavigationComponent>
      </div>
    `,
  }),
};

export const Pill: Story = {
  render: (args: any) => ({
    components: {
      TabNavigationComponent,
      TabNavigationItemComponent,
      TabNavigationLinkComponent,
      TabNavigationIndicatorComponent,
      TabNavigationMenuComponent,
      TabNavigationMenugroupComponent,
      TabNavigationMenuitemComponent,
      TabNavigationSeparatorComponent,
      DropdownMenuRoot,
      DropdownMenuTrigger,
      Home,
    },
    setup() {
      return { args };
    },
    template: `
      <div style="padding: 2rem;">
        <TabNavigationComponent variant="inset">
          <TabNavigationItemComponent>
            <TabNavigationLinkComponent variant="pill" state="active">
              <Home :size="16" />
              Home
            </TabNavigationLinkComponent>
          </TabNavigationItemComponent>
          <TabNavigationItemComponent>
            <DropdownMenuRoot>
              <DropdownMenuTrigger as-child>
                <TabNavigationLinkComponent variant="pill">
                  Balances
                  <TabNavigationIndicatorComponent />
                </TabNavigationLinkComponent>
              </DropdownMenuTrigger>
              <TabNavigationMenuComponent>
                <TabNavigationMenugroupComponent>
                  <TabNavigationMenuitemComponent>View Balance</TabNavigationMenuitemComponent>
                  <TabNavigationMenuitemComponent>Transfer Funds</TabNavigationMenuitemComponent>
                  <TabNavigationMenuitemComponent>Deposit</TabNavigationMenuitemComponent>
                  <TabNavigationMenuitemComponent>Withdraw</TabNavigationMenuitemComponent>
                </TabNavigationMenugroupComponent>
                <TabNavigationSeparatorComponent />
                <TabNavigationMenugroupComponent>
                  <TabNavigationMenuitemComponent>Transaction History</TabNavigationMenuitemComponent>
                  <TabNavigationMenuitemComponent>Account Settings</TabNavigationMenuitemComponent>
                  <TabNavigationMenuitemComponent>Support</TabNavigationMenuitemComponent>
                </TabNavigationMenugroupComponent>
              </TabNavigationMenuComponent>
            </DropdownMenuRoot>
          </TabNavigationItemComponent>
          <TabNavigationItemComponent>
            <DropdownMenuRoot>
              <DropdownMenuTrigger as-child>
                <TabNavigationLinkComponent variant="pill">
                  Transactions
                </TabNavigationLinkComponent>
              </DropdownMenuTrigger>
              <TabNavigationMenuComponent>
                <TabNavigationMenugroupComponent>
                  <TabNavigationMenuitemComponent>Recent</TabNavigationMenuitemComponent>
                  <TabNavigationMenuitemComponent>All</TabNavigationMenuitemComponent>
                </TabNavigationMenugroupComponent>
              </TabNavigationMenuComponent>
            </DropdownMenuRoot>
          </TabNavigationItemComponent>
          <TabNavigationItemComponent>
            <TabNavigationLinkComponent variant="pill">
              Messages
              <span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 9999px; background-color: var(--color-danger); color: var(--color-danger-fg); font-size: 10px; font-weight: 600; margin-left: var(--spacing-1);">1</span>
            </TabNavigationLinkComponent>
          </TabNavigationItemComponent>
          <TabNavigationItemComponent>
            <TabNavigationLinkComponent variant="pill" disabled>
              Support
            </TabNavigationLinkComponent>
          </TabNavigationItemComponent>
        </TabNavigationComponent>
      </div>
    `,
  }),
};
