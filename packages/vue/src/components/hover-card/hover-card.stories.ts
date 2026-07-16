import HoverCardComponent from '@/components/hover-card/hover-card.vue'
import HoverCardTriggerComponent from '@/components/hover-card/hover-card-trigger.vue'
import HoverCardContentComponent from '@/components/hover-card/hover-card-content.vue'
import ButtonComponent from '@/components/button/button.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref, watch } from 'vue'

const meta = {
  title: 'Components/Overlay/Hover Card',
  component: HoverCardComponent,
  argTypes: {
    defaultOpen: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    delayMs: {
      control: 'number'
    }
  },
  args: {
    defaultOpen: false,
    disabled: false,
    delayMs: 300
  },
  render: (args) => ({
    components: {
      HoverCardComponent,
      HoverCardTriggerComponent,
      HoverCardContentComponent,
      ButtonComponent
    },
    setup() {
      // Use controlled mode with v-model for Storybook
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
      <HoverCardComponent
        v-model:open="open"
        :disabled="args.disabled"
        :delay-ms="args.delayMs"
      >
        <HoverCardTriggerComponent as-child>
          <ButtonComponent size="lg">
            Hover over me
          </ButtonComponent>
        </HoverCardTriggerComponent>
        <HoverCardContentComponent style="width: 300px;">
          <div style="display: flex; align-items: center; gap: var(--spacing-4);">
            <img 
              src="https://pulse.quido.online/logo.png" 
              alt="Avatar Image" 
              style="object-fit: cover; width: 32px; height: 32px; object-position: left;" 
            />
            <div style="display: flex; flex-direction: column; gap: var(--spacing-1);">
              <h4 style="font-size: var(--font-size-sm); font-weight: var(--font-weight-semibold); margin: 0;">
                pulse
              </h4>
              <p style="font-size: var(--font-size-sm); margin: 0;">
                A composition library for building accessible web applications with Vue.
              </p>
            </div>
          </div>
        </HoverCardContentComponent>
      </HoverCardComponent>
    `
  })
} satisfies Meta<typeof HoverCardComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Uncontrolled: Story = {
  render: () => ({
    components: {
      HoverCardComponent,
      HoverCardTriggerComponent,
      HoverCardContentComponent,
      ButtonComponent
    },
    // No v-model:open here -- this is the plain, most common real-world
    // usage (no external state at all), which previously never opened
    // because `open` silently auto-defaulted to `false` instead of
    // `undefined`, pinning `isControlled`/`isOpen` permanently.
    template: `
      <HoverCardComponent>
        <HoverCardTriggerComponent as-child>
          <ButtonComponent size="lg">Hover over me</ButtonComponent>
        </HoverCardTriggerComponent>
        <HoverCardContentComponent style="width: 200px;">
          Uncontrolled hover card content
        </HoverCardContentComponent>
      </HoverCardComponent>
    `
  })
}
