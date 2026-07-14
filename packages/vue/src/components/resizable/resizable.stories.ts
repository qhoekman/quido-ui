import ResizablePanelGroupComponent from '@/components/resizable/resizable-panel-group.vue'
import ResizablePanelComponent from '@/components/resizable/resizable-panel.vue'
import ResizableHandleComponent from '@/components/resizable/resizable-handle.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Layout/Resizable',
  component: ResizablePanelGroupComponent,
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical']
    }
  },
  args: {
    direction: 'horizontal'
  },
  render: (args) => ({
    components: {
      ResizablePanelGroupComponent,
      ResizablePanelComponent,
      ResizableHandleComponent
    },
    setup() {
      return { args }
    },
    template: `
      <ResizablePanelGroupComponent
        :direction="args.direction"
        style="max-width: var(--spacing-md); border-radius: var(--border-radius-lg); border: var(--border-width-default) solid var(--color-border);"
      >
        <ResizablePanelComponent :default-size="50">
          <div
            style="display: flex; height: 200px; align-items: center; justify-content: center; padding: var(--spacing-6);"
          >
            <span style="font-weight: var(--font-weight-semibold);">One</span>
          </div>
        </ResizablePanelComponent>
        <ResizableHandleComponent />
        <ResizablePanelComponent :default-size="50">
          <ResizablePanelGroupComponent direction="vertical">
            <ResizablePanelComponent :default-size="25">
              <div
                style="display: flex; height: 100%; align-items: center; justify-content: center; padding: var(--spacing-6);"
              >
                <span style="font-weight: var(--font-weight-semibold);">Two</span>
              </div>
            </ResizablePanelComponent>
            <ResizableHandleComponent />
            <ResizablePanelComponent :default-size="75">
              <div
                style="display: flex; height: 100%; align-items: center; justify-content: center; padding: var(--spacing-6);"
              >
                <span style="font-weight: var(--font-weight-semibold);">Three</span>
              </div>
            </ResizablePanelComponent>
          </ResizablePanelGroupComponent>
        </ResizablePanelComponent>
      </ResizablePanelGroupComponent>
    `
  })
} satisfies Meta<typeof ResizablePanelGroupComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
