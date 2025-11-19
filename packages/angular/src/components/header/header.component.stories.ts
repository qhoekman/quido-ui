import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { HeaderTaglineComponent } from './header-tagline.component';
import { HeaderTitleComponent } from './header-title.component';
import { HeaderBodyComponent } from './header-body.component';
import { HeaderContentComponent } from './header-content.component';
import { HeaderActionsComponent } from './header-actions.component';
import { HeaderBackdropComponent } from './header-backdrop.component';
import { HeaderBackdropImageComponent } from './header-backdrop-image.component';
import { ButtonComponent } from '../button/button.component';

const meta: Meta<HeaderComponent> = {
  title: 'Components/Layout/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HeaderComponent,
        HeaderTaglineComponent,
        HeaderTitleComponent,
        HeaderBodyComponent,
        HeaderContentComponent,
        HeaderActionsComponent,
        HeaderBackdropComponent,
        HeaderBackdropImageComponent,
        ButtonComponent,
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <div pui-header>
        <div pui-header-content>
          <h3 pui-header-tagline>Tagline</h3>
          <h2 pui-header-title>Short heading goes here</h2>
          <p pui-header-body>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eum tempora delectus et. Iusto tempora accusantium suscipit labore, iure exercitationem autem quasi odit aut temporibus rem expedita maxime at. Laudantium?
          </p>
          <div pui-header-actions>
            <button pui-button>Button</button>
            <button pui-button variant="outline">Button</button>
          </div>
        </div>
      </div>
    `,
  }),
};
