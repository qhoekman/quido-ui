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
            <span style="font-weight: var(--font-weight-semibold);">Explorer</span>
          </div>
        </ResizablePanelComponent>
        <ResizableHandleComponent with-handle />
        <ResizablePanelComponent :default-size="50">
          <ResizablePanelGroupComponent direction="vertical">
            <ResizablePanelComponent :default-size="25">
              <div
                style="display: flex; height: 100%; align-items: center; justify-content: center; padding: var(--spacing-6);"
              >
                <span style="font-weight: var(--font-weight-semibold);">Editor</span>
              </div>
            </ResizablePanelComponent>
            <ResizableHandleComponent with-handle />
            <ResizablePanelComponent :default-size="75">
              <div
                style="display: flex; height: 100%; align-items: center; justify-content: center; padding: var(--spacing-6);"
              >
                <span style="font-weight: var(--font-weight-semibold);">Terminal</span>
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

export const Composition: Story = {
  render: () => ({
    components: {
      ResizablePanelGroupComponent,
      ResizablePanelComponent,
      ResizableHandleComponent
    },
    template: `
      <ResizablePanelGroupComponent
        direction="horizontal"
        style="max-width: var(--spacing-md); height: 260px; border-radius: var(--border-radius-lg); border: var(--border-width-default) solid var(--color-border);"
      >
        <ResizablePanelComponent :default-size="30">
          <div style="padding: var(--spacing-4);">
            <h4 style="margin: 0 0 var(--spacing-2); font-size: var(--font-size-sm);">Chapters</h4>
            <ul style="margin: 0; padding-left: var(--spacing-4); font-size: var(--font-size-sm); color: var(--color-muted-fg);">
              <li>Introduction</li>
              <li>Getting started</li>
              <li>Advanced usage</li>
            </ul>
          </div>
        </ResizablePanelComponent>
        <ResizableHandleComponent with-handle />
        <ResizablePanelComponent :default-size="70">
          <div style="padding: var(--spacing-4);">
            <h3 style="margin: 0 0 var(--spacing-2);">Getting started</h3>
            <p style="margin: 0; font-size: var(--font-size-sm); color: var(--color-muted-fg);">
              Drag the divider to resize the chapter list and reading pane.
            </p>
          </div>
        </ResizablePanelComponent>
      </ResizablePanelGroupComponent>
    `
  })
}
