import SkipToContentComponent from '@/components/skip-to-content/skip-to-content.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Accessibility/Skip To Content',
  component: SkipToContentComponent,
  argTypes: {
    targetId: {
      control: 'text'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon']
    },
    disabled: {
      control: 'boolean'
    },
    asChild: {
      control: 'boolean'
    },
    as: {
      control: 'select',
      options: ['button', 'a']
    }
  },
  args: {
    targetId: 'main-content',
    size: 'md',
    disabled: false,
    asChild: false,
    as: 'button'
  },
  render: (args) => ({
    components: { SkipToContentComponent },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 100vh; background-color: lightgray;">
        <SkipToContentComponent v-bind="args">
          Skip to main content
        </SkipToContentComponent>
      </div>
      <div id="main-content" style="height: 100vh; background-color: white; padding: var(--spacing-4);">
        <h1>Main Content</h1>
        <p>This is the main content area.</p>
        <p>Press Tab to show the skip link, then click it or press Enter/Space to navigate here.</p>
      </div>
    `
  })
} satisfies Meta<typeof SkipToContentComponent>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
