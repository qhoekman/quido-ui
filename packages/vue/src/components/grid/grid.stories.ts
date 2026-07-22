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
          style="background-color: var(--color-muted); padding: var(--spacing-4); text-align: center;"
        >
          Item {{ i }}
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
          style="background-color: var(--color-muted); padding: var(--spacing-4); text-align: center;"
        >
          Item (span 2)
        </GridItemComponent>
        <GridItemComponent
          :col-span="1"
          style="background-color: var(--color-muted); padding: var(--spacing-4); text-align: center;"
        >
          Item (span 1)
        </GridItemComponent>
        <GridItemComponent
          :col-span="1"
          style="background-color: var(--color-muted); padding: var(--spacing-4); text-align: center;"
        >
          Item (span 1)
        </GridItemComponent>
      </GridComponent>
    `
  })
}

export const Composition: Story = {
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
        <GridItemComponent :col-span="1" style="padding: var(--spacing-4); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
          <p style="margin: 0 0 var(--spacing-1); color: var(--color-muted-fg); font-size: var(--font-size-sm);">Revenue</p>
          <p style="margin: 0; font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold);">$48,290</p>
        </GridItemComponent>
        <GridItemComponent :col-span="1" style="padding: var(--spacing-4); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
          <p style="margin: 0 0 var(--spacing-1); color: var(--color-muted-fg); font-size: var(--font-size-sm);">New Users</p>
          <p style="margin: 0; font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold);">1,204</p>
        </GridItemComponent>
        <GridItemComponent :col-span="1" style="padding: var(--spacing-4); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
          <p style="margin: 0 0 var(--spacing-1); color: var(--color-muted-fg); font-size: var(--font-size-sm);">Orders</p>
          <p style="margin: 0; font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold);">356</p>
        </GridItemComponent>
        <GridItemComponent :col-span="1" style="padding: var(--spacing-4); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
          <p style="margin: 0 0 var(--spacing-1); color: var(--color-muted-fg); font-size: var(--font-size-sm);">Conversion</p>
          <p style="margin: 0; font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold);">3.2%</p>
        </GridItemComponent>
      </GridComponent>
    `
  })
}
