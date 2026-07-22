import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../button/button.component';
import { StackComponent } from '../stack/stack.component';
import { DialogCloseComponent } from './dialog-close.component';
import { DialogContentComponent } from './dialog-content.component';
import { DialogDescriptionComponent } from './dialog-description.component';
import { DialogFooterComponent } from './dialog-footer.component';
import { DialogHeaderComponent } from './dialog-header.component';
import { DialogTitleComponent } from './dialog-title.component';
import { DialogComponent } from './dialog.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<DialogComponent> = {
  title: 'Components/Overlay/Dialog',
  component: DialogComponent,
  decorators: [
    moduleMetadata({
      imports: [
        DialogComponent,
        DialogCloseComponent,
        DialogHeaderComponent,
        DialogFooterComponent,
        DialogTitleComponent,
        DialogDescriptionComponent,
        DialogContentComponent,
        ButtonComponent,
        StackComponent,
        StoryComponent,
      ],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;

type Story = StoryObj<DialogComponent>;

export const Default: Story = {
  args: {
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `
    <qui-story>
      <button qui-button (click)="dialogRef.open()">Open Dialog</button>
      <dialog qui-dialog #dialogRef [size]="size">
        <div qui-dialog-close (doClose)="dialogRef.close()"></div>
        <div qui-dialog-header>
          <div qui-dialog-title>Dialog Title</div>
          <div qui-dialog-description>Dialog description goes here.</div>
        </div>
        <div qui-dialog-content>
          <p>This is the content of the dialog.</p>
        </div>
        <div qui-dialog-footer>
          <button qui-button variant="outline" (click)="dialogRef.close()">Cancel</button>
          <button qui-button (click)="dialogRef.close()">Confirm</button>
        </div>
      </dialog>
    </qui-story>
    `,
  }),
};

export const Confirm: Story = {
  args: {
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `
      <button qui-button (click)="dialogRef.open()">Open Dialog</button>
      <dialog qui-dialog #dialogRef [size]="size">
        <div qui-dialog-header>
          <div qui-dialog-title>Are you absolutely sure?</div>
        </div>

        <div qui-dialog-content>
          <p>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</p>
        </div>

        <div qui-dialog-footer>
          <button qui-button variant="outline" (click)="dialogRef.close()">Cancel</button>
          <button qui-button (click)="dialogRef.close()">Confirm</button>
        </div>
      </dialog>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
      <div style="width: 360px; padding: var(--spacing-4); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg); display: flex; align-items: center; justify-content: space-between; box-sizing: border-box;">
        <div>
          <h4 style="margin: 0 0 var(--spacing-1); font-size: var(--font-size-sm);">Pedro Duarte</h4>
          <p style="margin: 0; color: var(--color-muted-fg); font-size: var(--font-size-sm);">@peduarte</p>
        </div>
        <button qui-button variant="outline" size="sm" (click)="dialogRef.open()">Edit</button>
        <dialog qui-dialog #dialogRef>
          <div qui-dialog-close (doClose)="dialogRef.close()"></div>
          <div qui-dialog-header>
            <div qui-dialog-title>Edit profile</div>
            <div qui-dialog-description>Make changes to your profile here. Click save when you're done.</div>
          </div>
          <div qui-dialog-footer>
            <button qui-button (click)="dialogRef.close()">Save changes</button>
          </div>
        </dialog>
      </div>
    `,
  }),
};
