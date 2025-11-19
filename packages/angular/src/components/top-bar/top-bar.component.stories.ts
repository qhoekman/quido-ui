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
import {
  IconCaretSortComponent,
  IconHamburgerMenuComponent,
} from '../../icons';

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
      <header qui-top-bar>
        <div qui-top-bar-section>
          <button qui-button variant="ghost" size="icon">
           <i qui-icon name="hamburger-menu"></i>
          </button>
        </div>
        <div qui-top-bar-section>
          <!-- Empty section -->
        </div>
        <div qui-top-bar-section items="end">
          <div qui-dropdown-menu>
            <button qui-button puiDropdownMenuTrigger [dropdownMenuFor]="dropdownAccountMenu">
            My profile
            <i qui-icon name="caret-sort"></i>
            </button>
            <ng-template #dropdownAccountMenu>
              <div qui-dropdown-menu-content>
                 <ol qui-dropdown-menu-group>
                  <li qui-dropdown-menu-item>Profile</li>
                  <li qui-dropdown-menu-item>Billing</li>
                  <li qui-dropdown-menu-item>Team</li>
                  <li qui-dropdown-menu-item>Subscription</li>
                </ol>
                <div qui-dropdown-menu-separator></div>
                <ol qui-dropdown-menu-group>
                  <li qui-dropdown-menu-item>Settings</li>
                  <li qui-dropdown-menu-item>Logout</li>
                </ol>
              </div>
            </ng-template>
          </div>
        </div>
      </header>
    `,
  }),
};
