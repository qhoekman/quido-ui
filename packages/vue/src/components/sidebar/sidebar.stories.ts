import SidebarComponent from '@/components/sidebar/sidebar.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Features/Application/Components/Sidebar',
  component: SidebarComponent,
  argTypes: {
    side: {
      control: 'select',
      options: ['left', 'right']
    },
    variant: {
      control: 'select',
      options: ['sidebar', 'floating', 'inset']
    },
    collapsible: {
      control: 'select',
      options: ['offcanvas', 'icon', 'none']
    },
    state: {
      control: 'select',
      options: ['collapsed', 'expanded']
    }
  },
  args: {
    side: 'left',
    variant: 'sidebar',
    collapsible: 'offcanvas',
    state: 'expanded'
  },
  parameters: {
    layout: 'fullscreen'
  },
  render: (args) => ({
    components: { SidebarComponent },
    setup() {
      return { args }
    },
    template: `
      <SidebarComponent v-bind="args">
        <div style="padding: var(--spacing-4); color: var(--color-sidebar-fg);">
          <h2 style="margin-bottom: var(--spacing-4); font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold);">
            Sidebar Content
          </h2>
          <p style="margin-bottom: var(--spacing-2);">This is the sidebar content area.</p>
          <p>You can add any content here, such as navigation menus, links, or other components.</p>
        </div>
      </SidebarComponent>
    `
  })
} satisfies Meta<typeof SidebarComponent>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const RightSide: Story = {
  args: {
    side: 'right'
  }
}

export const Floating: Story = {
  args: {
    variant: 'floating'
  }
}

export const Inset: Story = {
  args: {
    variant: 'inset'
  }
}

export const IconCollapsible: Story = {
  args: {
    collapsible: 'icon'
  }
}

export const Collapsed: Story = {
  args: {
    state: 'collapsed'
  }
}

export const NoneCollapsible: Story = {
  args: {
    collapsible: 'none'
  }
}

export const Composition: Story = {
  render: () => ({
    components: { SidebarComponent },
    template: `
      <SidebarComponent side="left" variant="sidebar" collapsible="offcanvas" state="expanded">
        <div style="display: flex; flex-direction: column; height: 100%; color: var(--color-sidebar-fg);">
          <div style="padding: var(--spacing-4); font-weight: var(--font-weight-semibold); border-bottom: var(--border-width-default) solid var(--color-sidebar-border);">
            Docs
          </div>
          <nav style="flex: 1; padding: var(--spacing-4); display: flex; flex-direction: column; gap: var(--spacing-2);">
            <a href="#">Getting started</a>
            <a href="#">Components</a>
            <a href="#">API reference</a>
          </nav>
          <div style="padding: var(--spacing-4); font-size: var(--font-size-sm); border-top: var(--border-width-default) solid var(--color-sidebar-border);">
            v2.4.0
          </div>
        </div>
      </SidebarComponent>
    `
  })
}
