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
    <qui-story>
      <div qui-menubar>
        <button qui-menubar-trigger [cdkMenuTriggerFor]="menubarFile">File</button>
        <button qui-menubar-trigger [cdkMenuTriggerFor]="menubarEdit">Edit</button>
      </div>

      <ng-template #menubarFile>
        <div qui-menubar-menu>
          <ol qui-menubar-group>
            <li qui-menubar-item>New</li>
            <li qui-menubar-item>Open...</li>
            <li qui-menubar-item>Save</li>
            <li qui-menubar-item>Save As...</li>
          </ol>
          <div qui-menubar-separator></div>
          <ol qui-menubar-group>
            <li qui-menubar-item>Close window</li>
            <li qui-menubar-item>Close</li>
            <li qui-menubar-item>Quit</li>
          </ol>
        </div>
      </ng-template>
      <ng-template #menubarEdit>
        <div qui-menubar-menu>
          <ol qui-menubar-group>
            <li qui-menubar-item>Undo</li>
            <li qui-menubar-item>Redo</li>
          </ol>
          <div qui-menubar-separator></div>
          <ol qui-menubar-group>
            <li qui-menubar-item>Cut</li>
            <li qui-menubar-item>Copy</li>
            <li qui-menubar-item>Paste</li>
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
      <div style="width: 500px; box-sizing: border-box; border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
        <div qui-menubar style="border-bottom: var(--border-width-default) solid var(--color-border);">
          <button qui-menubar-trigger [cdkMenuTriggerFor]="menubarFile">File</button>
          <button qui-menubar-trigger [cdkMenuTriggerFor]="menubarView">View</button>
        </div>
        <div style="padding: var(--spacing-6); color: var(--color-muted-fg); font-size: var(--font-size-sm);">
          Document content goes here.
        </div>
      </div>

      <ng-template #menubarFile>
        <div qui-menubar-menu>
          <ol qui-menubar-group>
            <li qui-menubar-item>New document</li>
            <li qui-menubar-item>Open...</li>
            <li qui-menubar-item>Save</li>
          </ol>
        </div>
      </ng-template>
      <ng-template #menubarView>
        <div qui-menubar-menu>
          <ol qui-menubar-group>
            <li qui-menubar-item>Zoom in</li>
            <li qui-menubar-item>Zoom out</li>
            <li qui-menubar-item>Reset zoom</li>
          </ol>
        </div>
      </ng-template>
    </qui-story>
    `,
  }),
};
