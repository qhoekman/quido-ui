import HeadingComponent from '@/components/heading/heading.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Typography/Heading',
  component: HeadingComponent,
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'unset']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', 'unset']
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'bold', 'unset']
    },
    color: {
      control: 'select',
      options: ['neutral', 'primary', 'secondary', 'unset']
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div', 'p']
    },
    asChild: {
      control: 'boolean'
    }
  },
  args: {
    variant: 'unset',
    size: 'unset',
    weight: 'unset',
    color: 'unset',
    as: 'h1',
    asChild: false
  },
  render: (args) => ({
    components: { HeadingComponent },
    setup() {
      return { args }
    },
    template: '<HeadingComponent v-bind="args">Sample Heading</HeadingComponent>'
  })
} satisfies Meta<typeof HeadingComponent>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: () => ({
    components: { HeadingComponent },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <HeadingComponent variant="h1">Heading 1</HeadingComponent>
        <HeadingComponent variant="h2">Heading 2</HeadingComponent>
        <HeadingComponent variant="h3">Heading 3</HeadingComponent>
        <HeadingComponent variant="h4">Heading 4</HeadingComponent>
        <HeadingComponent variant="h5">Heading 5</HeadingComponent>
        <HeadingComponent variant="h6">Heading 6</HeadingComponent>
      </div>
    `
  })
}

export const Sizes: Story = {
  render: () => ({
    components: { HeadingComponent },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <HeadingComponent size="sm">Small Heading</HeadingComponent>
        <HeadingComponent size="md">Medium Heading</HeadingComponent>
        <HeadingComponent size="lg">Large Heading</HeadingComponent>
        <HeadingComponent size="xl">Extra Large Heading</HeadingComponent>
        <HeadingComponent size="2xl">2XL Heading</HeadingComponent>
        <HeadingComponent size="3xl">3XL Heading</HeadingComponent>
      </div>
    `
  })
}

export const Weights: Story = {
  render: () => ({
    components: { HeadingComponent },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <HeadingComponent weight="normal">Normal Weight</HeadingComponent>
        <HeadingComponent weight="medium">Medium Weight</HeadingComponent>
        <HeadingComponent weight="bold">Bold Weight</HeadingComponent>
      </div>
    `
  })
}

export const Colors: Story = {
  render: () => ({
    components: { HeadingComponent },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <HeadingComponent color="neutral">Neutral Color</HeadingComponent>
        <HeadingComponent color="primary">Primary Color</HeadingComponent>
        <HeadingComponent color="secondary">Secondary Color</HeadingComponent>
      </div>
    `
  })
}

export const Composition: Story = {
  render: () => ({
    components: { HeadingComponent },
    template: `
      <article style="max-width: 32rem;">
        <HeadingComponent variant="h1" style="display: block; margin-bottom: var(--spacing-2);">Getting started with Pulse</HeadingComponent>
        <HeadingComponent variant="h2" color="secondary" style="display: block; margin-bottom: var(--spacing-4); font-weight: var(--font-weight-normal);">A quick tour of the component library</HeadingComponent>
        <HeadingComponent variant="h3" style="display: block; margin-bottom: var(--spacing-1);">Installation</HeadingComponent>
      </article>
    `
  })
}
