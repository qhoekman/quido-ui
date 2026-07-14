import type { Meta, StoryObj } from '@storybook/vue3'
import SkeletonComponent from './skeleton.vue'

const meta: Meta<typeof SkeletonComponent> = {
  title: 'Components/Feedback/Skeleton',
  component: SkeletonComponent,
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof SkeletonComponent>

export const Default: Story = {
  render: () => ({
    components: { SkeletonComponent },
    template: `
      <div style="display: flex; gap: var(--spacing-2); align-items: center;">
        <SkeletonComponent style="width: var(--spacing-12); height: var(--spacing-12); border-radius: var(--border-radius-full);" />
        <div style="display: flex; flex-direction: column; gap: var(--spacing-2); align-items: center;">
          <SkeletonComponent style="width: 250px; height: var(--spacing-4);" />
          <SkeletonComponent style="width: 200px; height: var(--spacing-4);" />
        </div>
      </div>
    `
  })
}
