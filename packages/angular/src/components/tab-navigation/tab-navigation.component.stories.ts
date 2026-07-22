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

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <ul qui-tab-navigation>
          <li qui-tab-navigation-item>
            <a qui-tab-navigation-link state="active">
              <i qui-icon name="home"></i>
              Home
            </a>
          </li>
          <li qui-tab-navigation-item>
            <a qui-tab-navigation-link [cdkMenuTriggerFor]="tabNavigationBalances">Balances
                <qui-tab-navigation-indicator></qui-tab-navigation-indicator>
            </a>
          </li>
          <li qui-tab-navigation-item>
            <a qui-tab-navigation-link [cdkMenuTriggerFor]="tabNavigationTransactions">Transactions
                <qui-tab-navigation-indicator></qui-tab-navigation-indicator>
            </a>
          </li>
          <li qui-tab-navigation-item>
            <a qui-tab-navigation-link>
              Messages
              <div qui-badge variant="destructive" size="sm" rounded="full">1</div>
            </a>
          </li>
          <li qui-tab-navigation-item>
            <a qui-tab-navigation-link [disabled]="true">Support</a>
          </li>
          <div qui-tab-navigation-rail></div>
        </ul>
        <ng-template #tabNavigationBalances>
          <div qui-tab-navigation-menu>
            <ol qui-tab-navigation-menugroup>
              <li qui-tab-navigation-menuitem>View Balance</li>
              <li qui-tab-navigation-menuitem>Transfer Funds</li>
              <li qui-tab-navigation-menuitem>Deposit</li>
              <li qui-tab-navigation-menuitem>Withdraw</li>
            </ol>
            <div qui-tab-navigation-separator></div>
            <ol qui-tab-navigation-menugroup>
              <li qui-tab-navigation-menuitem>Transaction History</li>
              <li qui-tab-navigation-menuitem>Account Settings</li>
              <li qui-tab-navigation-menuitem>Support</li>
            </ol>
          </div>
        </ng-template>
        <ng-template #tabNavigationTransactions>
          <div qui-tab-navigation-menu>
            <ol qui-tab-navigation-menugroup>
              <li qui-tab-navigation-menuitem>Recent</li>
              <li qui-tab-navigation-menuitem>All</li>
            </ol>
          </div>
        </ng-template>
      </qui-story>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
      <qui-story>
        <div style="max-width: 500px; border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg); padding: var(--spacing-4);">
          <h3 style="margin: 0 0 var(--spacing-4);">Settings</h3>
          <ul qui-tab-navigation variant="border" gap="sm">
            <li qui-tab-navigation-item>
              <a qui-tab-navigation-link variant="border" state="active">General</a>
            </li>
            <li qui-tab-navigation-item>
              <a qui-tab-navigation-link variant="border">Security</a>
            </li>
            <li qui-tab-navigation-item>
              <a qui-tab-navigation-link variant="border">Billing</a>
            </li>
          </ul>
          <p style="margin: var(--spacing-4) 0 0; color: var(--color-muted-fg); font-size: var(--font-size-sm);">Manage your account name, email, and profile photo.</p>
        </div>
      </qui-story>
    `,
  }),
};

export const Link: Story = {
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <ul qui-tab-navigation>
          <li qui-tab-navigation-item>
            <a qui-tab-navigation-link state="active">
              <i qui-icon name="home"></i>
              Home
            </a>
          </li>
          <li qui-tab-navigation-item>
            <a qui-tab-navigation-link [cdkMenuTriggerFor]="tabNavigationBalances">Balances
                <qui-tab-navigation-indicator></qui-tab-navigation-indicator>
            </a>
          </li>
          <li qui-tab-navigation-item>
            <a qui-tab-navigation-link [cdkMenuTriggerFor]="tabNavigationTransactions">Transactions
                <qui-tab-navigation-indicator></qui-tab-navigation-indicator>
            </a>
          </li>
          <li qui-tab-navigation-item>
            <a qui-tab-navigation-link>
              Messages
              <div qui-badge variant="destructive" size="sm" rounded="full">1</div>
            </a>
          </li>
          <li qui-tab-navigation-item>
            <a qui-tab-navigation-link [disabled]="true">Support</a>
          </li>
          <div qui-tab-navigation-rail></div>
        </ul>
        <ng-template #tabNavigationBalances>
          <div qui-tab-navigation-menu>
            <ol qui-tab-navigation-menugroup>
              <li qui-tab-navigation-menuitem>View Balance</li>
              <li qui-tab-navigation-menuitem>Transfer Funds</li>
              <li qui-tab-navigation-menuitem>Deposit</li>
              <li qui-tab-navigation-menuitem>Withdraw</li>
            </ol>
            <div qui-tab-navigation-separator></div>
            <ol qui-tab-navigation-menugroup>
              <li qui-tab-navigation-menuitem>Transaction History</li>
              <li qui-tab-navigation-menuitem>Account Settings</li>
              <li qui-tab-navigation-menuitem>Support</li>
            </ol>
          </div>
        </ng-template>
        <ng-template #tabNavigationTransactions>
          <div qui-tab-navigation-menu>
            <ol qui-tab-navigation-menugroup>
              <li qui-tab-navigation-menuitem>Recent</li>
              <li qui-tab-navigation-menuitem>All</li>
            </ol>
          </div>
        </ng-template>
      </qui-story>
    `,
  }),
};

export const Border: Story = {
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <ul qui-tab-navigation gap="sm">
          <li qui-tab-navigation-item>
            <a qui-tab-navigation-link variant="border" state="active">
              <i qui-icon name="home"></i>
              Home
            </a>
          </li>
          <li qui-tab-navigation-item>
            <a qui-tab-navigation-link variant="border" [cdkMenuTriggerFor]="tabNavigationBalances">Balances
                <qui-tab-navigation-indicator></qui-tab-navigation-indicator>
            </a>
          </li>
          <li qui-tab-navigation-item>
            <a qui-tab-navigation-link variant="border" [cdkMenuTriggerFor]="tabNavigationTransactions">Transactions
                <qui-tab-navigation-indicator></qui-tab-navigation-indicator>
            </a>
          </li>
          <li qui-tab-navigation-item>
            <a qui-tab-navigation-link variant="border">
              Messages
              <div qui-badge variant="destructive" size="sm" rounded="full">1</div>
            </a>
          </li>
          <li qui-tab-navigation-item>
            <a qui-tab-navigation-link variant="border" [disabled]="true">Support</a>
          </li>
        </ul>
        <ng-template #tabNavigationBalances>
          <div qui-tab-navigation-menu>
            <ol qui-tab-navigation-menugroup>
              <li qui-tab-navigation-menuitem>View Balance</li>
              <li qui-tab-navigation-menuitem>Transfer Funds</li>
              <li qui-tab-navigation-menuitem>Deposit</li>
              <li qui-tab-navigation-menuitem>Withdraw</li>
            </ol>
            <div qui-tab-navigation-separator></div>
            <ol qui-tab-navigation-menugroup>
              <li qui-tab-navigation-menuitem>Transaction History</li>
              <li qui-tab-navigation-menuitem>Account Settings</li>
              <li qui-tab-navigation-menuitem>Support</li>
            </ol>
          </div>
        </ng-template>
        <ng-template #tabNavigationTransactions>
          <div qui-tab-navigation-menu>
            <ol qui-tab-navigation-menugroup>
              <li qui-tab-navigation-menuitem>Recent</li>
              <li qui-tab-navigation-menuitem>All</li>
            </ol>
          </div>
        </ng-template>
      </qui-story>
    `,
  }),
};

export const Pill: Story = {
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <ul qui-tab-navigation variant="inset">
          <li qui-tab-navigation-item>
            <a qui-tab-navigation-link variant="pill" state="active">
              <i qui-icon name="home"></i>
              Home
            </a>
          </li>
          <li qui-tab-navigation-item>
            <a qui-tab-navigation-link variant="pill" [cdkMenuTriggerFor]="tabNavigationBalances">Balances
                <qui-tab-navigation-indicator></qui-tab-navigation-indicator>
            </a>
          </li>
          <li qui-tab-navigation-item>
            <a qui-tab-navigation-link variant="pill" [cdkMenuTriggerFor]="tabNavigationTransactions">Transactions
                <qui-tab-navigation-indicator></qui-tab-navigation-indicator>
            </a>
          </li>
          <li qui-tab-navigation-item>
            <a qui-tab-navigation-link variant="pill">
              Messages
              <div qui-badge variant="destructive" size="sm" rounded="full">1</div>
            </a>
          </li>
          <li qui-tab-navigation-item>
            <a qui-tab-navigation-link variant="pill" [disabled]="true">Support</a>
          </li>
        </ul>
        <ng-template #tabNavigationBalances>
          <div qui-tab-navigation-menu>
            <ol qui-tab-navigation-menugroup>
              <li qui-tab-navigation-menuitem>View Balance</li>
              <li qui-tab-navigation-menuitem>Transfer Funds</li>
              <li qui-tab-navigation-menuitem>Deposit</li>
              <li qui-tab-navigation-menuitem>Withdraw</li>
            </ol>
            <div qui-tab-navigation-separator></div>
            <ol qui-tab-navigation-menugroup>
              <li qui-tab-navigation-menuitem>Transaction History</li>
              <li qui-tab-navigation-menuitem>Account Settings</li>
              <li qui-tab-navigation-menuitem>Support</li>
            </ol>
          </div>
        </ng-template>
        <ng-template #tabNavigationTransactions>
          <div qui-tab-navigation-menu>
            <ol qui-tab-navigation-menugroup>
              <li qui-tab-navigation-menuitem>Recent</li>
              <li qui-tab-navigation-menuitem>All</li>
            </ol>
          </div>
        </ng-template>
      </qui-story>
    `,
  }),
};
