import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { ButtonComponent } from '../button/button.component';
import { LoadingBarComponent } from './loading-bar.component';
import { LoadingService } from './loading.service';

const meta: Meta<LoadingBarComponent> = {
  title: 'Components/Feedback/Loading Bar',
  component: LoadingBarComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent],
      providers: [LoadingService],
    }),
  ],
};
export default meta;

type Story = StoryObj<LoadingBarComponent>;

export const Default: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    loading: true,
  },
  render: (args) => {
    return {
      props: args,
      template: `
        <div style="width: 100%; padding: 10px;">
          <qui-loading-bar [loading]="loading"></qui-loading-bar>
        </div>
      `,
    };
  },
};
