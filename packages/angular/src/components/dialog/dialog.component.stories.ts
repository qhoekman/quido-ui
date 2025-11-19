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
    <pui-story>
      <dialog pui-dialog [size]="size">
        <div pui-dialog-close></div>
        <div pui-dialog-header>
          <div pui-dialog-title>Dialog Title</div>
          <div pui-dialog-description>Dialog description goes here.</div>
        </div>
        <div pui-dialog-content>
          <p>This is the content of the dialog.</p>
        </div>
        <div pui-dialog-footer>
          <button pui-button variant="outline">Cancel</button>
          <button pui-button>Confirm</button>
        </div>
      </dialog>
    </pui-story>
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
      <dialog pui-dialog [size]="size">
        <div pui-dialog-header>
          <div pui-dialog-title>Are you absolutely sure?</div>
        </div>

        <div pui-dialog-content>
          <p>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</p>
        </div>

        <div pui-dialog-footer>
          <button pui-button variant="outline">Cancel</button>
          <button pui-button>Confirm</button>
        </div>
      </dialog>
    `,
  }),
};
