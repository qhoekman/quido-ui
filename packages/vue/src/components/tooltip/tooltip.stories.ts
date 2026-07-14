import TooltipComponent from '@/components/tooltip/tooltip.vue'
import TooltipProviderComponent from '@/components/tooltip/tooltip-provider.vue'
import TooltipTriggerComponent from '@/components/tooltip/tooltip-trigger.vue'
import TooltipContentComponent from '@/components/tooltip/tooltip-content.vue'
import TooltipArrowComponent from '@/components/tooltip/tooltip-arrow.vue'
import ButtonComponent from '@/components/button/button.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref, watch } from 'vue'

const meta = {
  title: 'Components/Overlay/Tooltip',
  component: TooltipComponent,
  argTypes: {
    defaultOpen: {
      control: 'boolean',
      description:
        'The open state of the tooltip when it is initially rendered'
    },
    open: {
      control: 'boolean',
      description: 'The controlled open state of the tooltip'
    },
    delayDuration: {
      control: 'number',
      description:
        'The duration from when the mouse enters the trigger until the tooltip opens'
    },
    disableHoverableContent: {
      control: 'boolean',
      description:
        'When true, trying to hover the content will result in the tooltip closing'
    },
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'The preferred side of the trigger to render against'
    },
    sideOffset: {
      control: 'number',
      description: 'The distance in pixels from the trigger'
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'The preferred alignment against the trigger'
    },
    alignOffset: {
      control: 'number',
      description: "An offset in pixels from the 'align' option"
    }
  },
  args: {
    defaultOpen: false,
    delayDuration: 700,
    sideOffset: 4,
    align: 'center',
    side: 'bottom'
  },
  render: (args) => ({
    components: {
      TooltipComponent,
      TooltipProviderComponent,
      TooltipTriggerComponent,
      TooltipContentComponent,
      TooltipArrowComponent,
      ButtonComponent
    },
    setup() {
      const open = ref(args.defaultOpen ?? false)

      watch(
        () => args.defaultOpen,
        (newValue) => {
          open.value = newValue ?? false
        }
      )

      return { args, open }
    },
    template: `
      <TooltipProviderComponent>
        <TooltipComponent
          v-model:open="open"
          :delay-duration="args.delayDuration"
          :disable-hoverable-content="args.disableHoverableContent"
        >
          <TooltipTriggerComponent as-child>
            <ButtonComponent variant="ghost" size="sm">Hover</ButtonComponent>
          </TooltipTriggerComponent>
          <TooltipContentComponent
            :align="args.align"
            :side="args.side"
            :side-offset="args.sideOffset"
            :align-offset="args.alignOffset"
          >
            <TooltipArrowComponent />
            <p>Add to library</p>
          </TooltipContentComponent>
        </TooltipComponent>
      </TooltipProviderComponent>
    `
  })
} satisfies Meta<typeof TooltipComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
