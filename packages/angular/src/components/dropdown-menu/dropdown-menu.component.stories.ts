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
    <pui-story>
      <div pui-dropdown-menu>
        <button pui-button puiDropdownMenuTrigger [dropdownMenuFor]="dropdownAccountMenu">My profile</button>
        <ng-template #dropdownAccountMenu>
          <div pui-dropdown-menu-content>
            <div pui-dropdown-menu-label>My Account</div>
            <div pui-dropdown-menu-separator></div>
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
    </pui-story>
    `,
  }),
};
