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

export const Composition: Story = {
  render: () => ({
    components: { CalendarComponent },
    setup() {
      const currentDate = ref(new Date())
      const currentMonth = ref(startOfMonth(new Date()))

      const handleValueChange = (date: Date) => {
        currentDate.value = date
        currentMonth.value = startOfMonth(date)
      }

      return { currentDate, currentMonth, handleValueChange }
    },
    template: `
      <div style="max-width: 320px; padding: var(--spacing-6); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
        <h3 style="margin: 0 0 var(--spacing-1);">Schedule a Meeting</h3>
        <p style="margin: 0 0 var(--spacing-4); color: var(--color-muted-fg);">Pick a date for your 30-minute call.</p>
        <CalendarComponent :current-date="currentDate" :current-month="currentMonth" @valueChange="handleValueChange" />
      </div>
    `
  })
}
