import CollapsibleComponent from '@/components/collapsible/collapsible.vue'
import CollapsibleTriggerComponent from '@/components/collapsible/collapsible-trigger.vue'
import CollapsibleContentComponent from '@/components/collapsible/collapsible-content.vue'
import ButtonComponent from '@/components/button/button.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref, watch } from 'vue'

const meta = {
  title: 'Components/Disclosure/Collapsible',
  component: CollapsibleComponent,
  argTypes: {
    defaultOpen: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    unmountOnHide: {
      control: 'boolean'
    }
  },
  args: {
    defaultOpen: false,
    disabled: false,
    unmountOnHide: true
  },
  render: (args) => ({
    components: {
      CollapsibleComponent,
      CollapsibleTriggerComponent,
      CollapsibleContentComponent,
      ButtonComponent
    },
    setup() {
      // Use controlled mode with v-model for Storybook
      // Initialize from defaultOpen arg
      const open = ref(args.defaultOpen ?? false)

      // Watch for changes to defaultOpen from Controls
      watch(
        () => args.defaultOpen,
        (newValue) => {
          open.value = newValue ?? false
        }
      )

      return { args, open }
    },
    template: `
      <CollapsibleComponent
        v-model:open="open"
        :disabled="args.disabled"
        :unmount-on-hide="args.unmountOnHide"
        style="width: 350px; display: flex; flex-direction: column; gap: var(--spacing-2);"
      >
        <div
          style="display: flex; align-items: center; justify-content: space-between; gap: var(--spacing-4); padding: var(--spacing-4);"
        >
          <h4
            style="font-size: var(--font-size-sm); font-weight: var(--font-weight-semibold);"
          >
            Lorem ipsum...
          </h4>
          <CollapsibleTriggerComponent as-child>
            <ButtonComponent variant="ghost" size="sm">
              Toggle
            </ButtonComponent>
          </CollapsibleTriggerComponent>
        </div>
        <div
          style="border-radius: var(--border-radius-md); border: var(--border-width-default) solid var(--color-border); padding: var(--spacing-4); font-size: var(--font-size-sm); font-family: var(--font-family-mono); box-shadow: var(--box-shadow-sm);"
        >
          Dolor sit amet.
        </div>
        <CollapsibleContentComponent>
          <div
            style="border-radius: var(--border-radius-md); border: var(--border-width-default) solid var(--color-border); padding: var(--spacing-4); font-size: var(--font-size-sm); font-family: var(--font-family-mono); box-shadow: var(--box-shadow-sm);"
          >
            Consectetur.
          </div>
          <div
            style="border-radius: var(--border-radius-md); border: var(--border-width-default) solid var(--color-border); padding: var(--spacing-4); font-size: var(--font-size-sm); font-family: var(--font-family-mono); box-shadow: var(--box-shadow-sm);"
          >
            Adipisicing elit.
          </div>
        </CollapsibleContentComponent>
      </CollapsibleComponent>
    `
  })
} satisfies Meta<typeof CollapsibleComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
