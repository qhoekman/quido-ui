import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import {
  IconBarChartComponent,
  IconBookmarkComponent,
  IconCaretSortComponent,
  IconChevronDownComponent,
  IconChevronRightComponent,
  IconClockComponent,
  IconColorWheelComponent,
  IconDotsHorizontalComponent,
  IconDrawingPinComponent,
  IconFrameComponent,
  IconGearComponent,
  IconHamburgerMenuComponent,
  IconKeyboardComponent,
  IconPieChartComponent,
  IconPlusComponent,
  IconSquareComponent,
} from '../../icons';
import { AvatarFallbackComponent } from '../avatar/avatar-fallback.component';
import { AvatarImageComponent } from '../avatar/avatar-image.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { CollapsibleComponent } from '../collapsible/collapsible.component';
import { DropdownMenuContentComponent } from '../dropdown-menu/dropdown-menu-content.component';
import { DropdownMenuGroupComponent } from '../dropdown-menu/dropdown-menu-group.component';
import { DropdownMenuItemComponent } from '../dropdown-menu/dropdown-menu-item.component';
import { DropdownMenuLabelComponent } from '../dropdown-menu/dropdown-menu-label.component';
import { DropdownMenuSeparatorComponent } from '../dropdown-menu/dropdown-menu-separator.component';
import { DropdownMenuTriggerDirective } from '../dropdown-menu/dropdown-menu-trigger.directive';
import { TopBarSectionComponent } from '../top-bar/top-bar-section.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { VisuallyHiddenComponent } from '../visually-hidden/visually-hidden.component';
import { SidebarContentComponent } from './sidebar-content.component';
import { SidebarFooterComponent } from './sidebar-footer.component';
import { SidebarGroupLabelComponent } from './sidebar-group-label.component';
import { SidebarGroupComponent } from './sidebar-group.component';
import { SidebarHeaderComponent } from './sidebar-header.component';
import { SidebarInsetComponent } from './sidebar-inset.component';
import { SidebarMenuActionComponent } from './sidebar-menu-action.component';
import { SidebarMenuBadgeComponent } from './sidebar-menu-badge.component';
import { SidebarMenuButtonComponent } from './sidebar-menu-button.component';
import { SidebarMenuItemComponent } from './sidebar-menu-item.component';
import { SidebarMenuSubButtonComponent } from './sidebar-menu-sub-button.component';
import { SidebarMenuSubItemComponent } from './sidebar-menu-sub-item.component';
import { SidebarMenuSubComponent } from './sidebar-menu-sub.component';
import { SidebarMenuComponent } from './sidebar-menu.component';
import { SidebarRailComponent } from './sidebar-rail.component';
import { SidebarTriggerComponent } from './sidebar-trigger.component';
import { SidebarViewportComponent } from './sidebar-viewport.component';
import { SidebarComponent } from './sidebar.component';
const meta: Meta<SidebarComponent> = {
  title: 'Components/Navigation/Sidebar',
  component: SidebarComponent,
  decorators: [
    moduleMetadata({
      imports: [
        SidebarComponent,
        SidebarHeaderComponent,
        SidebarFooterComponent,
        SidebarContentComponent,
        SidebarGroupComponent,
        SidebarGroupLabelComponent,
        SidebarMenuComponent,
        SidebarMenuItemComponent,
        SidebarMenuButtonComponent,
        SidebarViewportComponent,
        CollapsibleComponent,
        IconChevronRightComponent,
        IconChevronDownComponent,
        IconCaretSortComponent,
        IconPlusComponent,
        IconDotsHorizontalComponent,
        SidebarMenuSubComponent,
        SidebarMenuSubItemComponent,
        SidebarMenuSubButtonComponent,
        SidebarInsetComponent,
        DropdownMenuTriggerDirective,
        DropdownMenuGroupComponent,
        DropdownMenuContentComponent,
        DropdownMenuItemComponent,
        DropdownMenuLabelComponent,
        DropdownMenuSeparatorComponent,
        SidebarMenuActionComponent,
        AvatarComponent,
        AvatarImageComponent,
        AvatarFallbackComponent,
        VisuallyHiddenComponent,
        TopBarComponent,
        TopBarSectionComponent,
        SidebarTriggerComponent,
        IconHamburgerMenuComponent,
        SidebarRailComponent,
        SidebarMenuBadgeComponent,
      ],
    }),
  ],
};
export default meta;

type Story = StoryObj<SidebarComponent>;

export const Default: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    menuData: {
      user: {
        name: 'pulse',
        email: 'm@example.com',
        avatar:
          'https://preview.redd.it/windows-xp-user-icons-part-1-v0-bckcj5nw74qb1.jpg?width=640&crop=smart&auto=webp&s=b2111ffb39a35affa0f5cc718d034b331e4d7e8a',
      },
      teams: [
        {
          name: 'Acme Inc',
          logo: IconClockComponent,
          plan: 'Enterprise',
        },
        {
          name: 'Acme Corp.',
          logo: IconColorWheelComponent,
          plan: 'Startup',
        },
        {
          name: 'Evil Corp.',
          logo: IconKeyboardComponent,
          plan: 'Free',
        },
      ],
      navMain: [
        {
          title: 'Playground',
          url: '#',
          icon: IconSquareComponent,
          isActive: true,
          items: [
            {
              title: 'History',
              url: '#',
            },
            {
              title: 'Starred',
              url: '#',
            },
            {
              title: 'Settings',
              url: '#',
            },
          ],
        },
        {
          title: 'Models',
          url: '#',
          icon: IconBarChartComponent,
          items: [
            {
              title: 'Genesis',
              url: '#',
            },
            {
              title: 'Explorer',
              url: '#',
            },
            {
              title: 'Quantum',
              url: '#',
            },
          ],
        },
        {
          title: 'Documentation',
          url: '#',
          icon: IconBookmarkComponent,
          items: [
            {
              title: 'Introduction',
              url: '#',
            },
            {
              title: 'Get Started',
              url: '#',
            },
            {
              title: 'Tutorials',
              url: '#',
            },
            {
              title: 'Changelog',
              url: '#',
            },
          ],
        },
        {
          title: 'Settings',
          url: '#',
          icon: IconGearComponent,
          items: [
            {
              title: 'General',
              url: '#',
            },
            {
              title: 'Team',
              url: '#',
            },
            {
              title: 'Billing',
              url: '#',
            },
            {
              title: 'Limits',
              url: '#',
            },
          ],
        },
      ],
      projects: [
        {
          name: 'Design Engineering',
          url: '#',
          icon: IconFrameComponent,
        },
        {
          name: 'Sales & Marketing',
          url: '#',
          icon: IconPieChartComponent,
          badge: '32+',
        },
        {
          name: 'Travel',
          url: '#',
          icon: IconDrawingPinComponent,
        },
      ],
    },
  } as never,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => ({
    props: {
      ...args,
      activeTeam: args.menuData.teams[0],
    } as never,
    template: `
      <div qui-sidebar-viewport>
        <div qui-sidebar collapsible="icon">
          <div qui-sidebar-header>
            <ul qui-sidebar-menu>
              <li qui-sidebar-menu-item>
                <div qui-dropdown-menu>
                  <button qui-sidebar-menu-button puiDropdownMenuTrigger [dropdownMenuFor]="dropdownTeam" spacing="outset" dropdownMenuSide="right">
                    <div style="display: flex; aspect-ratio: 1; width: var(--spacing-8); height: var(--spacing-8);align-items: center; justify-content: center; border-radius: var(--border-radius-lg); background-color: var(--color-sidebar-primary); color: var(--color-sidebar-primary-fg);">
                      <ng-container *ngComponentOutlet="activeTeam.logo"></ng-container>
                    </div>
                    <span>{{ activeTeam.name }}</span>
                    <i qui-icon name="caret-sort" style="margin-left: auto;"></i>
                  </button>
                  <ng-template #dropdownTeam>
                    <div qui-dropdown-menu-content>
                      <div qui-dropdown-menu-label>Teams</div>
                      <ol qui-dropdown-menu-group>
                        @for (team of menuData.teams; track team.name) {
                          <li qui-dropdown-menu-item>
                            <ng-container *ngComponentOutlet="team.logo"></ng-container>
                            <span>{{ team.name }}</span>

                          </li>
                        }
                      </ol>
                      <div qui-dropdown-menu-separator></div>
                      <ol qui-dropdown-menu-group>
                        <li qui-dropdown-menu-item>
                          <i qui-icon name="plus"></i>
                          <span>Add Team</span>
                        </li>
                      </ol>
                    </div>
                  </ng-template>
                </div>
              </li>
            </ul>
          </div>
          <div qui-sidebar-content>
            <div qui-sidebar-group hide="icon">
              <span qui-sidebar-group-label>
                Platform
              </span>
              <ul qui-sidebar-menu>
                @for (item of menuData.navMain; track item.title) {
                  <li qui-sidebar-menu-item>
                    <div qui-collapsible #collapsible [expanded]="expanded" style="max-width: var(--breakpoint-xs);">
                      <ng-template #trigger>
                        <button qui-sidebar-menu-button [tooltip]="item.title"  (click)="collapsible.toggle()">
                          @if (item.icon) {
                            <ng-container *ngComponentOutlet="item.icon"></ng-container>
                          }
                          <span>{{ item.title }}</span>
                          <i qui-icon name="chevron-down" *ngIf="!collapsible.expanded" style="margin-left: auto;"></i>
                          <i qui-icon name="chevron-right" *ngIf="collapsible.expanded" style="margin-left: auto;"></i>
                        </button>
                      </ng-template>
                      <ng-template #content>
                        <ul qui-sidebar-menu-sub>
                          @for (subItem of item.items; track subItem.title) {
                            <li qui-sidebar-menu-sub-item>
                              <a qui-sidebar-menu-sub-button [href]="subItem.url">
                                {{ subItem.title }}
                              </a>
                            </li>
                          }
                        </ul>
                      </ng-template>
                    </div>
                  </li>
                }
              </ul>
            </div>
            <div qui-sidebar-group>
              <span qui-sidebar-group-label>
                Projects
              </span>
              @for (project of menuData.projects; track project.name) {
                <div qui-sidebar-menu-item>
                  <a qui-sidebar-menu-button [href]="project.url">
                    <ng-container *ngComponentOutlet="project.icon"></ng-container>
                    <span>{{ project.name }}</span>
                    @if (project.badge) {
                      <div qui-sidebar-menu-badge>{{ project.badge }}</div>
                    }
                  </a>
                  <div qui-dropdown-menu>
                    <button qui-sidebar-menu-action puiDropdownMenuTrigger [dropdownMenuFor]="dropdownProject" showOnHover="true">
                      <i qui-icon name="dots-horizontal"></i>
                      <span qui-visually-hidden>More</span>
                    </button>
                    <ng-template #dropdownProject>
                      <div qui-dropdown-menu-content>
                        <ol qui-dropdown-menu-group>
                          <li qui-dropdown-menu-item>View project</li>
                          <li qui-dropdown-menu-item>Share project</li>
                          <div qui-dropdown-menu-separator></div>
                          <li qui-dropdown-menu-item>Delete project</li>
                        </ol>
                      </div>
                    </ng-template>
                  </div>
                </div>
              }
            </div>
          </div>
          <div qui-sidebar-footer>
            <ul qui-sidebar-menu>
              <li qui-sidebar-menu-item>
                <div qui-dropdown-menu>
                  <button qui-sidebar-menu-button puiDropdownMenuTrigger [dropdownMenuFor]="dropdownUser" dropdownMenuSide="right" spacing="outset">
                    <div qui-avatar #avatar size="sm">
                      <img qui-avatar-image [src]="menuData.user.avatar" alt="User Avatar" (fallback)="avatar.onFallback($event)">
                      <span qui-avatar-fallback>{{ menuData.user.name.slice(0, 2) }}</span>
                    </div>
                    <span>{{ menuData.user.name }}</span>
                    <i qui-icon name="caret-sort" style="margin-left: auto;"></i>
                  </button>
                  <ng-template #dropdownUser>
                    <div qui-dropdown-menu-content>
                      <div qui-dropdown-menu-label>
                        <div qui-avatar #avatar>
                          <img qui-avatar-image [src]="menuData.user.avatar" alt="User Avatar" (fallback)="avatar.onFallback($event)">
                          <span qui-avatar-fallback>{{ menuData.user.name.slice(0, 2) }}</span>
                        </div>
                        <span>{{ menuData.user.name }}</span>
                      </div>
                      <div qui-dropdown-menu-separator></div>
                      <ol qui-dropdown-menu-group>
                        <li qui-dropdown-menu-item>Profile</li>
                        <li qui-dropdown-menu-item>Billing</li>
                        <li qui-dropdown-menu-item>Team</li>
                        <li qui-dropdown-menu-item>Subscription</li>
                      </ol>
                    </div>
                  </ng-template>
                </div>
              </li>
            </ul>
          </div>
          <button qui-sidebar-rail></button>
        </div>
        <main qui-sidebar-inset>
          <header qui-top-bar>
            <div qui-top-bar-section>
              <button qui-sidebar-trigger aria-label="Toggle Sidebar">
                <i qui-icon name="hamburger-menu"></i>
                <span qui-visually-hidden>Toggle Sidebar</span>
              </button>
            </div>
          </header>
        </main>
      </div>
    `,
  }),
};
