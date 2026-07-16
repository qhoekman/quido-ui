import DatePickerComponent from '@/components/date-picker/date-picker.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'

const meta = {
  title: 'Components/Data Entry/Date Picker',
  component: DatePickerComponent,
  argTypes: {
    selectedDate: {
      control: 'date',
    },
    open: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    selectedDate: new Date(),
    disabled: false,
  },
  render: (args) => ({
    components: { DatePickerComponent },
    setup() {
      const selectedDate = ref(args.selectedDate || new Date())
      const open = ref(args.open)

      const handleValueChange = (date: Date) => {
        selectedDate.value = date
      }

      const handleOpenChange = (value: boolean) => {
        open.value = value
      }

      return {
        args: {
          ...args,
          selectedDate: selectedDate.value,
          open: open.value,
        },
        handleValueChange,
        handleOpenChange,
      }
    },
    template:
      '<DatePickerComponent v-bind="args" @valueChange="handleValueChange" @update:open="handleOpenChange" />',
  }),
} satisfies Meta<typeof DatePickerComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
