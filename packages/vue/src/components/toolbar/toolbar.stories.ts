import ToolbarComponent from '@/components/toolbar/toolbar.vue'
import ToolbarContentComponent from '@/components/toolbar/toolbar-content.vue'
import ToolbarLinkComponent from '@/components/toolbar/toolbar-link.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Features/Mobile/Components/Toolbar',
  component: ToolbarComponent,
  argTypes: {},
  args: {},
  render: (args) => ({
    components: {
      ToolbarComponent,
      ToolbarContentComponent,
      ToolbarLinkComponent
    },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 100vh; position: relative;">
        <ToolbarComponent v-bind="args">
          <ToolbarContentComponent>
            <ToolbarLinkComponent v-for="i in 5" :key="i" href="#">
              {{ i }}
            </ToolbarLinkComponent>
          </ToolbarContentComponent>
        </ToolbarComponent>
      </div>
    `
  }),
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile2'
    }
  }
} satisfies Meta<typeof ToolbarComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: {
      ToolbarComponent,
      ToolbarContentComponent,
      ToolbarLinkComponent
    },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 100vh; position: relative;">
        <ToolbarComponent v-bind="args">
          <ToolbarContentComponent>
            <ToolbarLinkComponent href="#">Home</ToolbarLinkComponent>
            <ToolbarLinkComponent href="#">Search</ToolbarLinkComponent>
            <ToolbarLinkComponent href="#">Profile</ToolbarLinkComponent>
          </ToolbarContentComponent>
        </ToolbarComponent>
      </div>
    `
  })
}

export const WithText: Story = {}

export const Composition: Story = {
  render: () => ({
    components: {
      ToolbarComponent,
      ToolbarContentComponent,
      ToolbarLinkComponent
    },
    data() {
      return {
        tabs: [
          {
            label: 'Home',
            path: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" />'
          },
          {
            label: 'Search',
            path: '<circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" />'
          },
          {
            label: 'Create',
            path: '<circle cx="12" cy="12" r="9" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />'
          },
          {
            label: 'Activity',
            path: '<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />'
          },
          {
            label: 'Profile',
            path: '<circle cx="12" cy="7" r="4" /><path d="M5.5 21a6.5 6.5 0 0 1 13 0" />'
          }
        ]
      }
    },
    template: `
      <div style="height: 100vh; position: relative;">
        <ToolbarComponent>
          <ToolbarContentComponent>
            <ToolbarLinkComponent v-for="tab in tabs" :key="tab.label" href="#">
              <div style="display: flex; flex-direction: column; align-items: center; gap: var(--spacing-1);">
                <svg
                  style="width: var(--spacing-5); height: var(--spacing-5);"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  v-html="tab.path"
                ></svg>
                <span style="font-size: var(--font-size-xs);">{{ tab.label }}</span>
              </div>
            </ToolbarLinkComponent>
          </ToolbarContentComponent>
        </ToolbarComponent>
      </div>
    `
  })
}

export const WithIcons: Story = {
  render: (args) => ({
    components: {
      ToolbarComponent,
      ToolbarContentComponent,
      ToolbarLinkComponent
    },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 100vh; position: relative;">
        <ToolbarComponent v-bind="args">
          <ToolbarContentComponent>
            <ToolbarLinkComponent v-for="i in 5" :key="i" href="#">
              <svg
                :style="{
                  width: 'var(--spacing-6)',
                  height: 'var(--spacing-6)'
                }"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </ToolbarLinkComponent>
          </ToolbarContentComponent>
        </ToolbarComponent>
      </div>
    `
  })
}
