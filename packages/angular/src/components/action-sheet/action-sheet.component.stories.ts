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
