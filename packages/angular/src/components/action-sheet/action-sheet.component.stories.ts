import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../button/button.component';
import { ActionSheetComponent } from './action-sheet.component';
import { IconCross2Component, IconHamburgerMenuComponent } from '../../icons';

const meta: Meta<ActionSheetComponent> = {
  title: 'Components/Overlay/Action Sheet',
  component: ActionSheetComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ActionSheetComponent,
        ButtonComponent,
        IconHamburgerMenuComponent,
        IconCross2Component,
      ],
    }),
  ],
  argTypes: {},
};
export default meta;

type Story = StoryObj<ActionSheetComponent>;

export const Default: Story = {
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => ({
    props: args,
    template: `
      <div
        qui-action-sheet
        #actionSheet
      >

        <button qui-button (click)="actionSheet.toggle()">
          <i qui-icon name="hamburger-menu"></i>
        </button>

      <ng-template #actionSheetContent>
        <button qui-button variant="ghost" size="sm" (click)="actionSheet.toggle()">
          <i qui-icon name="cross-2"></i>
        </button>
      </ng-template>

    </div>
    `,
  }),
};

export const Composition: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => ({
    props: args,
    template: `
      <div
        qui-action-sheet
        #actionSheet
        style="--action-sheet-height: 340px;"
      >

        <div style="display: flex; align-items: center; justify-content: space-between; gap: var(--spacing-3); margin: var(--spacing-6) auto 0; width: 100%; max-width: var(--spacing-lg); padding: var(--spacing-4); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg); box-sizing: border-box;">
          <div>
            <p style="margin: 0; font-weight: var(--font-weight-medium);">Sunset over the bay</p>
            <p style="margin: 0; font-size: var(--font-size-sm); color: var(--color-muted-fg);">Posted 2 hours ago</p>
          </div>
          <button qui-button variant="ghost" size="sm" (click)="actionSheet.toggle()">⋯</button>
        </div>

      <ng-template #actionSheetContent>
        <div style="margin: 0 auto; width: 100%; max-width: var(--spacing-sm); padding: var(--spacing-4); box-sizing: border-box;">
          <h4 style="margin: 0 0 var(--spacing-1);">Manage post</h4>
          <p style="margin: 0 0 var(--spacing-3); font-size: var(--font-size-sm); color: var(--color-muted-fg);">Choose what to do with this post.</p>
          <div style="display: flex; flex-direction: column; gap: var(--spacing-1);">
            <button qui-button variant="ghost" style="width: 100%; justify-content: flex-start;">Save to Collection</button>
            <button qui-button variant="ghost" style="width: 100%; justify-content: flex-start;">Share</button>
            <button qui-button variant="ghost" style="width: 100%; justify-content: flex-start;">Copy Link</button>
            <button qui-button variant="ghost" style="width: 100%; justify-content: flex-start;">Report</button>
            <button qui-button variant="ghost" style="width: 100%; justify-content: flex-start;">Delete Post</button>
          </div>
          <button qui-button variant="outline" style="width: 100%; margin-top: var(--spacing-3);" (click)="actionSheet.toggle()">Cancel</button>
        </div>
      </ng-template>

    </div>
    `,
  }),
};
