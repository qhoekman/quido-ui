import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../button/button.component';
import { ActionSheetComponent } from './action-sheet.component';
import { IconCross2Component, IconHamburgerMenuComponent } from '../../icons';

const meta: Meta<ActionSheetComponent> = {
  title: 'Components/Overlay/Action Sheet',
  component: ActionSheetComponent,
  decorators: [
    moduleMetadata({
      imports: [ActionSheetComponent, ButtonComponent, IconHamburgerMenuComponent, IconCross2Component],
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
        pui-action-sheet
        #actionSheet
      >

        <button pui-button (click)="actionSheet.toggle()">
          <i pui-icon name="hamburger-menu"></i>
        </button>

      <ng-template #actionSheetContent>
        <button pui-button variant="ghost" size="sm" (click)="actionSheet.toggle()">
          <i pui-icon name="cross-2"></i>
        </button>
      </ng-template>

    </div>
    `,
  }),
};
