import GridComponent from '@/components/grid/grid.vue'
import GridItemComponent from '@/components/grid/grid-item.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Layout/Grid',
  component: GridComponent,
  argTypes: {
    columns: {
      control: 'number',
      description: 'Number of columns in the grid'
    },
    asChild: {
      control: 'boolean'
    }
  },
  args: {
    columns: 4,
    asChild: false
  },
  render: (args) => ({
    components: { GridComponent, GridItemComponent },
    setup() {
      return { args }
    },
    template: `
      <GridComponent v-bind="args">
        <GridItemComponent
          v-for="i in args.columns"
          :key="i"
          :col-span="1"
          style="background-color: lightgray; padding: 20px;"
        >
          Grid Item
        </GridItemComponent>
      </GridComponent>
    `
  })
} satisfies Meta<typeof GridComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    columns: 4
  }
}

export const ThreeColumns: Story = {
  args: {
    columns: 3
  }
}

export const SixColumns: Story = {
  args: {
    columns: 6
  }
}

export const WithColSpan: Story = {
  args: {
    columns: 4
  },
  render: (args) => ({
    components: { GridComponent, GridItemComponent },
    setup() {
      return { args }
    },
    template: `
      <GridComponent v-bind="args">
        <GridItemComponent
          :col-span="2"
          style="background-color: lightgray; padding: 20px;"
        >
          Grid Item (span 2)
        </GridItemComponent>
        <GridItemComponent
          :col-span="1"
          style="background-color: lightgray; padding: 20px;"
        >
          Grid Item (span 1)
        </GridItemComponent>
        <GridItemComponent
          :col-span="1"
          style="background-color: lightgray; padding: 20px;"
        >
          Grid Item (span 1)
        </GridItemComponent>
      </GridComponent>
    `
  })
}
