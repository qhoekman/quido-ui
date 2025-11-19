import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../button/button.component';
import { DrawerComponent } from './drawer.component';
import { DrawerContentComponent } from './drawer-content.component';
import { DrawerOverlayComponent } from './drawer-overlay.component';
import { IconHamburgerMenuComponent } from '../../icons';

const meta: Meta<DrawerComponent> = {
  title: 'Components/Overlay/Drawer',
  component: DrawerComponent,
  decorators: [
    moduleMetadata({
      imports: [
        DrawerComponent,
        ButtonComponent,
        DrawerOverlayComponent,
        DrawerContentComponent,
        IconHamburgerMenuComponent,
      ],
    }),
  ],
  argTypes: {
    // Define any controls for the dropdown menu component if needed
  },
};
export default meta;

type Story = StoryObj<DrawerComponent>;

export const Default: Story = {
  args: {
    variant: 'side',
    position: 'left',
    hasBackdrop: 'auto',
  },
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => ({
    props: args,
    template: `
      <div
        qui-drawer
        #drawer
        [variant]="variant"
        [position]="position"
        [hasBackdrop]="hasBackdrop"
    >
      <ng-template #drawerContent>
        <button qui-button variant="ghost" size="sm" (click)="drawer.toggle()">
          &#x2715;
        </button>
      </ng-template>
      <div qui-drawer-content>
        <button qui-button [fullWidth]="true" (click)="drawer.toggle()">
          <i qui-icon name="hamburger-menu"></i>
        </button>
      </div>
    </div>
    `,
  }),
};
