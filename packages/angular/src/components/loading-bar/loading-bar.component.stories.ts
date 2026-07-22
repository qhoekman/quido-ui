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

export const Composition: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => ({
    template: `
      <div>
        <qui-loading-bar [loading]="true"></qui-loading-bar>
        <div style="display: flex; align-items: center; justify-content: space-between; padding: var(--spacing-4) var(--spacing-6); border-bottom: var(--border-width-default) solid var(--color-border);">
          <h3 style="margin: 0;">Dashboard</h3>
          <span style="color: var(--color-muted-fg); font-size: var(--font-size-sm);">Refreshing data...</span>
        </div>
      </div>
    `,
  }),
};
