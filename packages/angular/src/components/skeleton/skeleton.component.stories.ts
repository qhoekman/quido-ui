import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { StackComponent } from '../stack/stack.component';
import { SkeletonComponent } from './skeleton.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<SkeletonComponent> = {
  title: 'Components/Feedback/Skeleton',
  component: SkeletonComponent,
  decorators: [
    moduleMetadata({
      imports: [StackComponent, StoryComponent],
    }),
  ],
  argTypes: {},
};
export default meta;

type Story = StoryObj<SkeletonComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
    <qui-story>
      <div qui-stack gap="sm">
        <div qui-skeleton style="width: var(--spacing-12); height: var(--spacing-12); border-radius: var(--border-radius-full);"></div>
        <div qui-stack direction="column" gap="sm" items="center">
          <div qui-skeleton style="width: 250px; height: var(--spacing-4);"></div>
          <div qui-skeleton style="width: 200px; height: var(--spacing-4);"></div>
        </div>
      </div>
    </qui-story>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
    <qui-story>
      <div style="width: 320px; padding: var(--spacing-4); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg); box-sizing: border-box;">
        <div qui-skeleton style="width: 100%; height: 160px; border-radius: var(--border-radius-md); margin-bottom: var(--spacing-4);"></div>
        <div qui-skeleton style="width: 70%; height: var(--spacing-5); margin-bottom: var(--spacing-2);"></div>
        <div qui-skeleton style="width: 100%; height: var(--spacing-4); margin-bottom: var(--spacing-1);"></div>
        <div qui-skeleton style="width: 90%; height: var(--spacing-4);"></div>
      </div>
    </qui-story>
    `,
  }),
};
