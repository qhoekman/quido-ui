import LoaderComponent from './loader.vue'
import ButtonComponent from '@/components/button/button.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Feedback/Loader',
  component: LoaderComponent,
  argTypes: {
    active: {
      control: 'boolean'
    },
    variant: {
      control: 'select',
      options: ['spinner']
    }
  },
  args: {
    active: true,
    variant: 'spinner'
  }
} satisfies Meta<typeof LoaderComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    active: true,
    variant: 'spinner'
  }
}

export const Composition: Story = {
  render: () => ({
    components: { LoaderComponent, ButtonComponent },
    template: `
      <ButtonComponent variant="primary" disabled style="display: inline-flex; align-items: center; gap: var(--spacing-2);">
        <LoaderComponent active variant="spinner" />
        Saving changes...
      </ButtonComponent>
    `
  })
}
