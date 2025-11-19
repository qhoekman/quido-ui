import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { ButtonComponent } from '../button/button.component';
import { BackToTopComponent } from './back-to-top.component';

const meta: Meta<BackToTopComponent> = {
  title: 'Components/Actions/Back to Top',
  component: BackToTopComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent],
    }),
  ],
};
export default meta;

type Story = StoryObj<BackToTopComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <div style="height: 200vh; position: relative;">
        <div pui-back-to-top>
          <button pui-button variant="primary" size="md">Back to Top</button>
        </div>
      </div>
    `,
  }),
};
