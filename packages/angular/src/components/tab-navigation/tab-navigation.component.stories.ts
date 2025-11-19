import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { CdkMenuTrigger } from '@angular/cdk/menu';
import { IconHomeComponent } from '../../icons';
import { StoryComponent } from '../../system/components/story/story.component';
import { TabNavigationIndicatorComponent } from './tab-navigation-indicator.component';
import { TabNavigationItemComponent } from './tab-navigation-item.component';
import { TabNavigationLinkComponent } from './tab-navigation-link.component';
import { TabNavigationMenuComponent } from './tab-navigation-menu.component';
import { TabNavigationMenugroupComponent } from './tab-navigation-menugroup.component';
import { TabNavigationMenuitemComponent } from './tab-navigation-menuitem.component';
import { TabNavigationSeparatorComponent } from './tab-navigation-separator.component';
import { TabNavigationComponent } from './tab-navigation.component';
import { TabNavigationRailComponent } from './tab-navigation-rail.component';
import { BadgeComponent } from '../badge/badge.component';

const meta: Meta<TabNavigationComponent> = {
  title: 'Components/Navigation/Tab Navigation',
  component: TabNavigationComponent,
  decorators: [
    moduleMetadata({
      imports: [
        StoryComponent,
        CdkMenuTrigger,
        TabNavigationLinkComponent,
        TabNavigationItemComponent,
        TabNavigationMenugroupComponent,
        TabNavigationMenuComponent,
        TabNavigationMenuitemComponent,
        TabNavigationSeparatorComponent,
        TabNavigationIndicatorComponent,
        TabNavigationRailComponent,
        BadgeComponent,
        IconHomeComponent,
      ],
    }),
  ],
  argTypes: {
    // Define any controls for the TabNavigationComponent if needed
  },
};
export default meta;

type Story = StoryObj<TabNavigationComponent>;

export const Link: Story = {
  render: (args) => ({
    props: args,
    template: `
      <pui-story>
        <ul pui-tab-navigation>
          <li pui-tab-navigation-item>
            <a pui-tab-navigation-link state="active">
              <i pui-icon name="home"></i>
              Home
            </a>
          </li>
          <li pui-tab-navigation-item>
            <a pui-tab-navigation-link [cdkMenuTriggerFor]="tabNavigationBalances">Balances
                <pui-tab-navigation-indicator></pui-tab-navigation-indicator>
            </a>
          </li>
          <li pui-tab-navigation-item>
            <a pui-tab-navigation-link [cdkMenuTriggerFor]="tabNavigationTransactions">Transactions</a>
          </li>
          <li pui-tab-navigation-item>
            <a pui-tab-navigation-link>
              Messages
              <div pui-badge variant="destructive" size="sm" rounded="full">1</div>
            </a>
          </li>
          <li pui-tab-navigation-item>
            <a pui-tab-navigation-link aria-disabled="true" disabled>Support</a>
          </li>
          <div pui-tab-navigation-rail></div>
        </ul>
        <ng-template #tabNavigationBalances>
          <div pui-tab-navigation-menu>
            <ol pui-tab-navigation-menugroup>
              <li pui-tab-navigation-menuitem>View Balance</li>
              <li pui-tab-navigation-menuitem>Transfer Funds</li>
              <li pui-tab-navigation-menuitem>Deposit</li>
              <li pui-tab-navigation-menuitem>Withdraw</li>
            </ol>
            <div pui-tab-navigation-separator></div>
            <ol pui-tab-navigation-menugroup>
              <li pui-tab-navigation-menuitem>Transaction History</li>
              <li pui-tab-navigation-menuitem>Account Settings</li>
              <li pui-tab-navigation-menuitem>Support</li>
            </ol>
          </div>
        </ng-template>
      </pui-story>
    `,
  }),
};

export const Border: Story = {
  render: (args) => ({
    props: args,
    template: `
      <pui-story>
        <ul pui-tab-navigation gap="sm">
          <li pui-tab-navigation-item>
            <a pui-tab-navigation-link variant="border" state="active">
              <i pui-icon name="home"></i>
              Home
            </a>
          </li>
          <li pui-tab-navigation-item>
            <a pui-tab-navigation-link variant="border" [cdkMenuTriggerFor]="tabNavigationBalances">Balances
                <pui-tab-navigation-indicator></pui-tab-navigation-indicator>
            </a>
          </li>
          <li pui-tab-navigation-item>
            <a pui-tab-navigation-link variant="border" [cdkMenuTriggerFor]="tabNavigationTransactions">Transactions</a>
          </li>
          <li pui-tab-navigation-item>
            <a pui-tab-navigation-link variant="border">
              Messages
              <div pui-badge variant="destructive" size="sm" rounded="full">1</div>
            </a>
          </li>
          <li pui-tab-navigation-item>
            <a pui-tab-navigation-link variant="border" aria-disabled="true" disabled>Support</a>
          </li>
        </ul>
        <ng-template #tabNavigationBalances>
          <div pui-tab-navigation-menu>
            <ol pui-tab-navigation-menugroup>
              <li pui-tab-navigation-menuitem>View Balance</li>
              <li pui-tab-navigation-menuitem>Transfer Funds</li>
              <li pui-tab-navigation-menuitem>Deposit</li>
              <li pui-tab-navigation-menuitem>Withdraw</li>
            </ol>
            <div pui-tab-navigation-separator></div>
            <ol pui-tab-navigation-menugroup>
              <li pui-tab-navigation-menuitem>Transaction History</li>
              <li pui-tab-navigation-menuitem>Account Settings</li>
              <li pui-tab-navigation-menuitem>Support</li>
            </ol>
          </div>
        </ng-template>
      </pui-story>
    `,
  }),
};

export const Pill: Story = {
  render: (args) => ({
    props: args,
    template: `
      <pui-story>
        <ul pui-tab-navigation variant="inset">
          <li pui-tab-navigation-item>
            <a pui-tab-navigation-link variant="pill" state="active">
              <i pui-icon name="home"></i>
              Home
            </a>
          </li>
          <li pui-tab-navigation-item>
            <a pui-tab-navigation-link variant="pill" [cdkMenuTriggerFor]="tabNavigationBalances">Balances
                <pui-tab-navigation-indicator></pui-tab-navigation-indicator>
            </a>
          </li>
          <li pui-tab-navigation-item>
            <a pui-tab-navigation-link variant="pill" [cdkMenuTriggerFor]="tabNavigationTransactions">Transactions</a>
          </li>
          <li pui-tab-navigation-item>
            <a pui-tab-navigation-link variant="pill">
              Messages
              <div pui-badge variant="destructive" size="sm" rounded="full">1</div>
            </a>
          </li>
          <li pui-tab-navigation-item>
            <a pui-tab-navigation-link variant="pill" aria-disabled="true" disabled>Support</a>
          </li>
        </ul>
        <ng-template #tabNavigationBalances>
          <div pui-tab-navigation-menu>
            <ol pui-tab-navigation-menugroup>
              <li pui-tab-navigation-menuitem>View Balance</li>
              <li pui-tab-navigation-menuitem>Transfer Funds</li>
              <li pui-tab-navigation-menuitem>Deposit</li>
              <li pui-tab-navigation-menuitem>Withdraw</li>
            </ol>
            <div pui-tab-navigation-separator></div>
            <ol pui-tab-navigation-menugroup>
              <li pui-tab-navigation-menuitem>Transaction History</li>
              <li pui-tab-navigation-menuitem>Account Settings</li>
              <li pui-tab-navigation-menuitem>Support</li>
            </ol>
          </div>
        </ng-template>
      </pui-story>
    `,
  }),
};
