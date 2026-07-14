import AspectRatioComponent from '@/components/aspect-ratio/aspect-ratio.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Layout/Aspect Ratio',
  component: AspectRatioComponent,
  argTypes: {
    ratio: {
      control: 'text',
      description: 'Aspect ratio in the format "width / height" (e.g., "16 / 9", "1 / 1")'
    },
    asChild: {
      control: 'boolean',
      description: 'When true, merges props and event handlers with the child element'
    }
  },
  args: {
    ratio: '16 / 9',
    asChild: false
  },
  render: (args) => ({
    components: {
      AspectRatioComponent
    },
    setup() {
      return { args }
    },
    template: `
      <AspectRatioComponent
        :ratio="args.ratio"
        :as-child="args.asChild"
        style="width: 100%; max-width: 500px;"
      >
        <div
          style="width: 100%; height: 120vh; background: var(--color-slate-200); display: flex; align-items: center; justify-content: center; color: var(--color-slate-600); font-size: var(--font-size-sm);"
        >
          Content with aspect ratio {{ args.ratio }}
        </div>
      </AspectRatioComponent>
    `
  })
} satisfies Meta<typeof AspectRatioComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    ratio: '16 / 9'
  }
}

export const Square: Story = {
  args: {
    ratio: '1 / 1'
  }
}

export const Portrait: Story = {
  args: {
    ratio: '3 / 4'
  }
}

export const Landscape: Story = {
  args: {
    ratio: '21 / 9'
  }
}
