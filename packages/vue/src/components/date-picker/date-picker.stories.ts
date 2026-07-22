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

export const Composition: Story = {
  render: () => ({
    components: { DatePickerComponent },
    setup() {
      const selectedDate = ref(new Date())

      const handleValueChange = (date: Date) => {
        selectedDate.value = date
      }

      return { selectedDate, handleValueChange }
    },
    template: `
      <div style="max-width: 280px;">
        <label style="display: block; font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); margin-bottom: var(--spacing-1-5);">Due date</label>
        <DatePickerComponent :selected-date="selectedDate" @valueChange="handleValueChange" />
        <p style="margin: var(--spacing-1-5) 0 0; font-size: var(--font-size-sm); color: var(--color-muted-fg);">Task will be marked overdue after this date.</p>
      </div>
    `
  })
}
