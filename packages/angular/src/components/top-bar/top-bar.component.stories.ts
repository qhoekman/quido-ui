import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TopBarComponent } from './top-bar.component';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component'; // Assuming this is the correct import path
import { DropdownMenuContentComponent } from '../dropdown-menu/dropdown-menu-content.component';
import { DropdownMenuGroupComponent } from '../dropdown-menu/dropdown-menu-group.component';
import { DropdownMenuItemComponent } from '../dropdown-menu/dropdown-menu-item.component';
import { DropdownMenuLabelComponent } from '../dropdown-menu/dropdown-menu-label.component';
import { DropdownMenuSeparatorComponent } from '../dropdown-menu/dropdown-menu-separator.component';
import { DropdownMenuTriggerDirective } from '../dropdown-menu/dropdown-menu-trigger.directive';
import { ButtonComponent } from '../button/button.component';
import { TopBarSectionComponent } from './top-bar-section.component';
import { IconCaretSortComponent, IconHamburgerMenuComponent } from '../../icons';

type EnhancedTopBarComponent = TopBarComponent & {
  icon: string;
};

const meta: Meta<EnhancedTopBarComponent> = {
  title: 'Components/Layout/Top Bar',
  component: TopBarComponent,
  decorators: [
    moduleMetadata({
      imports: [
        TopBarComponent,
        TopBarSectionComponent,
        ButtonComponent,
        DropdownMenuComponent,
        DropdownMenuTriggerDirective,
        DropdownMenuGroupComponent,
        DropdownMenuContentComponent,
        DropdownMenuItemComponent,
        DropdownMenuLabelComponent,
        DropdownMenuSeparatorComponent,
        IconCaretSortComponent,
        IconHamburgerMenuComponent,
      ],
    }),
  ],
};
export default meta;

type Story = StoryObj<EnhancedTopBarComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <header pui-top-bar>
        <div pui-top-bar-section>
          <button pui-button variant="ghost" size="icon">
           <i pui-icon name="hamburger-menu"></i>
          </button>
        </div>
        <div pui-top-bar-section>
          <!-- Empty section -->
        </div>
        <div pui-top-bar-section items="end">
          <div pui-dropdown-menu>
            <button pui-button puiDropdownMenuTrigger [dropdownMenuFor]="dropdownAccountMenu">
            My profile
            <i pui-icon name="caret-sort"></i>
            </button>
            <ng-template #dropdownAccountMenu>
              <div pui-dropdown-menu-content>
                 <ol pui-dropdown-menu-group>
                  <li pui-dropdown-menu-item>Profile</li>
                  <li pui-dropdown-menu-item>Billing</li>
                  <li pui-dropdown-menu-item>Team</li>
                  <li pui-dropdown-menu-item>Subscription</li>
                </ol>
                <div pui-dropdown-menu-separator></div>
                <ol pui-dropdown-menu-group>
                  <li pui-dropdown-menu-item>Settings</li>
                  <li pui-dropdown-menu-item>Logout</li>
                </ol>
              </div>
            </ng-template>
          </div>
        </div>
      </header>
    `,
  }),
};
