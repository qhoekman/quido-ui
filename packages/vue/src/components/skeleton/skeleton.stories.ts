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
        <div style="display: flex; flex-direction: column; gap: var(--spacing-2); align-items: flex-start;">
          <SkeletonComponent style="width: 250px; height: var(--spacing-4);" />
          <SkeletonComponent style="width: 200px; height: var(--spacing-4);" />
        </div>
      </div>
    `
  })
}

export const Composition: Story = {
  render: () => ({
    components: { SkeletonComponent },
    template: `
      <div style="max-width: 320px; padding: var(--spacing-4); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
        <SkeletonComponent style="width: 100%; height: 160px; border-radius: var(--border-radius-md); margin-bottom: var(--spacing-4);" />
        <SkeletonComponent style="width: 70%; height: var(--spacing-5); margin-bottom: var(--spacing-2);" />
        <SkeletonComponent style="width: 100%; height: var(--spacing-4); margin-bottom: var(--spacing-1);" />
        <SkeletonComponent style="width: 90%; height: var(--spacing-4);" />
      </div>
    `
  })
}
