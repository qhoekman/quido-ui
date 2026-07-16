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

export const WithText: Story = {}

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
