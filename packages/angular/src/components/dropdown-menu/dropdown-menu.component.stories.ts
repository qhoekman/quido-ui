import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../button/button.component';
import { DropdownMenuContentComponent } from './dropdown-menu-content.component';
import { DropdownMenuGroupComponent } from './dropdown-menu-group.component';
import { DropdownMenuItemComponent } from './dropdown-menu-item.component';
import { DropdownMenuLabelComponent } from './dropdown-menu-label.component';
import { DropdownMenuSeparatorComponent } from './dropdown-menu-separator.component';
import { DropdownMenuTriggerDirective } from './dropdown-menu-trigger.directive';
import { DropdownMenuComponent } from './dropdown-menu.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<DropdownMenuComponent> = {
  title: 'Components/Navigation/Dropdown Menu',
  component: DropdownMenuComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ButtonComponent,
        DropdownMenuTriggerDirective,
        DropdownMenuGroupComponent,
        DropdownMenuContentComponent,
        DropdownMenuItemComponent,
        DropdownMenuLabelComponent,
        DropdownMenuSeparatorComponent,
        StoryComponent,
      ],
    }),
  ],
  argTypes: {},
};
export default meta;

type Story = StoryObj<DropdownMenuComponent>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
    <qui-story>
      <div qui-dropdown-menu>
        <button qui-button puiDropdownMenuTrigger [dropdownMenuFor]="dropdownAccountMenu">My profile</button>
        <ng-template #dropdownAccountMenu>
          <div qui-dropdown-menu-content>
            <div qui-dropdown-menu-label>My Account</div>
            <div qui-dropdown-menu-separator></div>
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
    </qui-story>
    `,
  }),
};
