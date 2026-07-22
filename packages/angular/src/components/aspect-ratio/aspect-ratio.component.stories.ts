import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { SkeletonComponent } from '../skeleton/skeleton.component';
import { AspectRatioComponent } from './aspect-ratio.component';

const meta: Meta<AspectRatioComponent> = {
  title: 'Components/Layout/Aspect Ratio',
  component: AspectRatioComponent,
  decorators: [
    moduleMetadata({
      imports: [AspectRatioComponent, SkeletonComponent],
    }),
  ],
  argTypes: {
    // Define any controls for the dropdown menu component if needed
  },
};
export default meta;

type Story = StoryObj<AspectRatioComponent>;

export const Default: Story = {
  args: {},

  render: (args) => ({
    props: args,
    template: `
      <div qui-aspect-ratio="16 / 9">
        <div qui-skeleton style="width: 100%; height: 120vh;"></div>
      </div>
    `,
  }),
};

export const Square: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
      <div qui-aspect-ratio="1 / 1">
        <div qui-skeleton style="width: 100%; height: 120vh;"></div>
      </div>
    `,
  }),
};

export const Portrait: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
      <div qui-aspect-ratio="3 / 4">
        <div qui-skeleton style="width: 100%; height: 120vh;"></div>
      </div>
    `,
  }),
};

export const Landscape: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
      <div qui-aspect-ratio="21 / 9">
        <div qui-skeleton style="width: 100%; height: 120vh;"></div>
      </div>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
      <div style="width: 280px; border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg); overflow: hidden;">
        <div qui-aspect-ratio="16 / 9">
          <div style="width: 100%; height: 100%; background: var(--color-slate-200); display: flex; align-items: center; justify-content: center; color: var(--color-slate-600); font-size: var(--font-size-sm);">
            Product photo
          </div>
        </div>
        <div style="padding: var(--spacing-3);">
          <h4 style="margin: 0 0 var(--spacing-1); font-size: var(--font-size-sm);">Wireless Keyboard</h4>
          <p style="margin: 0; color: var(--color-muted-fg); font-size: var(--font-size-sm);">$49.00</p>
        </div>
      </div>
    `,
  }),
};
