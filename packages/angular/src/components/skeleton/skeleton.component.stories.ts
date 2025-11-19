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
