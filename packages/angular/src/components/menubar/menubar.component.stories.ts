import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MenubarComponent } from './menubar.component';
import { MenubarGroupComponent } from './menubar-group.component';
import { MenubarItemComponent } from './menubar-item.component';
import { MenubarMenuComponent } from './menubar-menu.component';
import { MenubarTriggerComponent } from './menubar-trigger.component';
import { ButtonComponent } from '../button/button.component';
import { CdkMenuTrigger } from '@angular/cdk/menu';
import { MenubarSeparatorComponent } from './menubar-separator.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<MenubarComponent> = {
  title: 'Components/Navigation/Menubar',
  component: MenubarComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CdkMenuTrigger,
        MenubarComponent,
        MenubarGroupComponent,
        MenubarItemComponent,
        MenubarMenuComponent,
        MenubarTriggerComponent,
        MenubarSeparatorComponent,
        ButtonComponent,
        StoryComponent,
      ],
    }),
  ],
  argTypes: {},
};
export default meta;

type Story = StoryObj<MenubarComponent>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
    <pui-story>
      <div pui-menubar>
        <button pui-menubar-trigger [cdkMenuTriggerFor]="menubarFile">File</button>
        <button pui-menubar-trigger [cdkMenuTriggerFor]="menubarEdit">Edit</button>
      </div>

      <ng-template #menubarFile>
        <div pui-menubar-menu>
          <ol pui-menubar-group>
            <li pui-menubar-item>New</li>
            <li pui-menubar-item>Open...</li>
            <li pui-menubar-item>Save</li>
            <li pui-menubar-item>Save As...</li>
          </ol>
          <div pui-menubar-separator></div>
          <ol pui-menubar-group>
            <li pui-menubar-item>Close window</li>
            <li pui-menubar-item>Close</li>
            <li pui-menubar-item>Quit</li>
          </ol>
        </div>
      </ng-template>
      <ng-template #menubarEdit>
        <div pui-menubar-menu>
          <ol pui-menubar-group>
            <li pui-menubar-item>Undo</li>
            <li pui-menubar-item>Redo</li>
          </ol>
          <div pui-menubar-separator></div>
          <ol pui-menubar-group>
            <li pui-menubar-item>Cut</li>
            <li pui-menubar-item>Copy</li>
            <li pui-menubar-item>Paste</li>
          </ol>
        </div>
      </ng-template>
    </pui-story>
    `,
  }),
};
