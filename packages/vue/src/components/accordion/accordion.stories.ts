import AccordionComponent from '@/components/accordion/accordion.vue'
import AccordionItemComponent from '@/components/accordion/accordion-item.vue'
import AccordionTriggerComponent from '@/components/accordion/accordion-trigger.vue'
import AccordionContentComponent from '@/components/accordion/accordion-content.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref, watch } from 'vue'

const meta = {
  title: 'Components/Disclosure/Accordion',
  component: AccordionComponent,
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Determines whether one or multiple items can be opened at the same time'
    },
    collapsible: {
      control: 'boolean',
      description: "When type is 'single', allows closing an open item by clicking it again"
    },
    disabled: {
      control: 'boolean',
      description: 'When true, prevents the user from interacting with the accordion'
    },
    defaultValue: {
      control: 'text',
      description: 'The value of the item that should be open when initially rendered (uncontrolled)'
    },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'The orientation of the accordion'
    }
  },
  args: {
    type: 'single',
    collapsible: true,
    disabled: false,
    orientation: 'vertical'
  },
  render: (args) => ({
    components: {
      AccordionComponent,
      AccordionItemComponent,
      AccordionTriggerComponent,
      AccordionContentComponent
    },
    setup() {
      // Use controlled mode with v-model for Storybook
      // Initialize from defaultValue arg if provided
      const value = ref<string | string[] | undefined>(
        args.defaultValue ?? (args.type === 'multiple' ? [] : undefined)
      )

      // Watch for changes to defaultValue from Controls
      watch(
        () => args.defaultValue,
        (newValue) => {
          if (newValue !== undefined) {
            value.value = newValue
          }
        }
      )

      return { args, value }
    },
    template: `
      <AccordionComponent
        v-model:value="value"
        :type="args.type"
        :collapsible="args.collapsible"
        :disabled="args.disabled"
        :orientation="args.orientation"
        style="width: 100%; max-width: 600px;"
      >
        <AccordionItemComponent value="item-1">
          <AccordionTriggerComponent>
            What is your refund policy?
          </AccordionTriggerComponent>
          <AccordionContentComponent>
            You can request a full refund within 30 days of purchase, no
            questions asked.
          </AccordionContentComponent>
        </AccordionItemComponent>
        <AccordionItemComponent value="item-2">
          <AccordionTriggerComponent>
            Do you offer team plans?
          </AccordionTriggerComponent>
          <AccordionContentComponent>
            Yes, team plans start at 5 seats and include centralized billing
            and admin controls.
          </AccordionContentComponent>
        </AccordionItemComponent>
      </AccordionComponent>
    `
  })
} satisfies Meta<typeof AccordionComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: () => ({
    components: {
      AccordionComponent,
      AccordionItemComponent,
      AccordionTriggerComponent,
      AccordionContentComponent
    },
    setup() {
      const value = ref('item-1')
      return { value }
    },
    template: `
      <div style="max-width: 32rem;">
        <h3 style="margin: 0 0 var(--spacing-4);">Frequently Asked Questions</h3>
        <AccordionComponent v-model:value="value" type="single" collapsible style="width: 100%;">
          <AccordionItemComponent value="item-1">
            <AccordionTriggerComponent>What is your refund policy?</AccordionTriggerComponent>
            <AccordionContentComponent>You can request a full refund within 30 days of purchase, no questions asked.</AccordionContentComponent>
          </AccordionItemComponent>
          <AccordionItemComponent value="item-2">
            <AccordionTriggerComponent>Do you offer team plans?</AccordionTriggerComponent>
            <AccordionContentComponent>Yes, team plans start at 5 seats and include centralized billing and admin controls.</AccordionContentComponent>
          </AccordionItemComponent>
          <AccordionItemComponent value="item-3">
            <AccordionTriggerComponent>Can I cancel anytime?</AccordionTriggerComponent>
            <AccordionContentComponent>Absolutely. Cancel your subscription anytime from your account settings — no cancellation fees.</AccordionContentComponent>
          </AccordionItemComponent>
        </AccordionComponent>
      </div>
    `
  })
}
