import StarRatingComponent from '@/components/star-rating/star-rating.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Feedback/Star Rating',
  component: StarRatingComponent,
  argTypes: {
    rating: {
      control: 'number',
      description: 'Current rating value'
    },
    stars: {
      control: 'number',
      description: 'Total number of stars'
    },
    asChild: {
      control: 'boolean'
    }
  },
  args: {
    rating: 3,
    stars: 5,
    asChild: false
  },
  render: (args) => ({
    components: { StarRatingComponent },
    setup() {
      return { args }
    },
    template: '<StarRatingComponent v-bind="args" />'
  })
} satisfies Meta<typeof StarRatingComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const DifferentRatings: Story = {
  render: () => ({
    components: { StarRatingComponent },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-4);">
        <StarRatingComponent :rating="0" :stars="5" />
        <StarRatingComponent :rating="1" :stars="5" />
        <StarRatingComponent :rating="2" :stars="5" />
        <StarRatingComponent :rating="3" :stars="5" />
        <StarRatingComponent :rating="4" :stars="5" />
        <StarRatingComponent :rating="5" :stars="5" />
      </div>
    `
  })
}

export const DifferentStarCounts: Story = {
  render: () => ({
    components: { StarRatingComponent },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-4);">
        <StarRatingComponent :rating="3" :stars="3" />
        <StarRatingComponent :rating="3" :stars="5" />
        <StarRatingComponent :rating="3" :stars="10" />
      </div>
    `
  })
}

export const Composition: Story = {
  render: () => ({
    components: { StarRatingComponent },
    template: `
      <div style="max-width: 16rem; padding: var(--spacing-4); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
        <h4 style="margin: 0 0 var(--spacing-1);">Classic Tee</h4>
        <div style="display: flex; align-items: center; gap: var(--spacing-2);">
          <StarRatingComponent :rating="4.5" :stars="5" />
          <span style="font-size: var(--font-size-sm); color: var(--color-muted-fg);">128 reviews</span>
        </div>
      </div>
    `
  })
}
