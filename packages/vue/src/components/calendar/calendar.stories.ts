import CalendarComponent from '@/components/calendar/calendar.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import { startOfMonth } from 'date-fns'

const meta = {
  title: 'Components/Data Entry/Calendar',
  component: CalendarComponent,
  argTypes: {
    currentMonth: {
      control: 'date',
    },
    currentDate: {
      control: 'date',
    },
  },
  args: {
    currentMonth: startOfMonth(new Date()),
    currentDate: new Date(),
  },
  render: (args) => ({
    components: { CalendarComponent },
    setup() {
      const currentDate = ref(args.currentDate || new Date())
      const currentMonth = ref(args.currentMonth || startOfMonth(new Date()))
      
      const handleValueChange = (date: Date) => {
        currentDate.value = date
        currentMonth.value = startOfMonth(date)
      }
      
      return { 
        args: {
          ...args,
          currentDate: currentDate.value,
          currentMonth: currentMonth.value,
        },
        handleValueChange
      }
    },
    template: '<CalendarComponent v-bind="args" @valueChange="handleValueChange" />'
  })
} satisfies Meta<typeof CalendarComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
