import PopoverComponent from '@/components/popover/popover.vue'
import PopoverTriggerComponent from '@/components/popover/popover-trigger.vue'
import PopoverContentComponent from '@/components/popover/popover-content.vue'
import ButtonComponent from '@/components/button/button.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref, watch } from 'vue'

const meta = {
  title: 'Components/Overlay/Popover',
  component: PopoverComponent,
  argTypes: {
    defaultOpen: {
      control: 'boolean',
      description:
        'The open state of the popover when it is initially rendered'
    },
    open: {
      control: 'boolean',
      description: 'The controlled open state of the popover'
    },
    modal: {
      control: 'boolean',
      description: 'Whether the popover is modal'
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'The reading direction of the popover'
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'The alignment of the popover content'
    },
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'The side of the trigger to place the popover'
    },
    sideOffset: {
      control: 'number',
      description: 'The distance in pixels from the trigger'
    }
  },
  args: {
    defaultOpen: false,
    modal: true,
    align: 'center',
    side: 'bottom',
    sideOffset: 4
  },
  render: (args) => ({
    components: {
      PopoverComponent,
      PopoverTriggerComponent,
      PopoverContentComponent,
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
      <PopoverComponent
        v-model:open="open"
        :modal="args.modal"
        :dir="args.dir"
      >
        <PopoverTriggerComponent as-child>
          <ButtonComponent variant="ghost" size="sm">Open</ButtonComponent>
        </PopoverTriggerComponent>
        <PopoverContentComponent
          :align="args.align"
          :side="args.side"
          :side-offset="args.sideOffset"
        >
          Place content for the popover here.
        </PopoverContentComponent>
      </PopoverComponent>
    `
  })
} satisfies Meta<typeof PopoverComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
