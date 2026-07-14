<script setup lang="ts">
import { computed, ref, watch, onMounted } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
} from 'date-fns'
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'
import ButtonComponent from '../button/button.vue'

const calendarVariants = cva('q-calendar', {
  variants: {},
  defaultVariants: {},
})

export type CalendarVariants = VariantProps<typeof calendarVariants>

export interface CalendarProps {
  currentDate?: Date
  currentMonth?: Date
}

const props = withDefaults(defineProps<CalendarProps>(), {
  currentDate: () => new Date(),
  currentMonth: () => startOfMonth(new Date()),
})

const emit = defineEmits<{
  'valueChange': [date: Date]
}>()

const localCurrentDate = ref<Date>(props.currentDate)
const localCurrentMonth = ref<Date>(props.currentMonth)
const weekdays = ref<string[]>([])
const days = ref<Date[]>([])

// Watch for prop changes
watch(
  () => props.currentDate,
  (newDate) => {
    if (newDate) {
      localCurrentDate.value = newDate
    }
  },
  { immediate: true }
)

watch(
  () => props.currentMonth,
  (newMonth) => {
    if (newMonth) {
      localCurrentMonth.value = newMonth
      updateCalendar()
    }
  },
  { immediate: true }
)

const classes = computed(() => {
  return calendarVariants({})
})

const setWeekdays = () => {
  const formatter = new Intl.DateTimeFormat(undefined, { weekday: 'short' })
  const start = new Date(Date.UTC(2021, 5, 6)) // A known Sunday
  weekdays.value = []
  for (let i = 0; i < 7; i++) {
    const day = new Date(start)
    day.setUTCDate(start.getUTCDate() + i)
    weekdays.value.push(formatter.format(day))
  }
}

const updateCalendar = () => {
  const start = startOfWeek(startOfMonth(localCurrentMonth.value))
  const end = endOfWeek(endOfMonth(localCurrentMonth.value))
  days.value = eachDayOfInterval({ start, end })
}

const prevMonth = () => {
  localCurrentMonth.value = subMonths(localCurrentMonth.value, 1)
  updateCalendar()
}

const nextMonth = () => {
  localCurrentMonth.value = addMonths(localCurrentMonth.value, 1)
  updateCalendar()
}

const handleDayClick = (day: Date) => {
  localCurrentDate.value = day
  emit('valueChange', localCurrentDate.value)
}

const handleDayKeydown = (event: KeyboardEvent, day: Date) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    handleDayClick(day)
  }
}

const format = (date: Date, dateFormat: string): string => {
  const options: Intl.DateTimeFormatOptions = {}

  if (dateFormat.includes('MMMM')) {
    options.month = 'long'
  }
  if (dateFormat.includes('yyyy')) {
    options.year = 'numeric'
  }
  if (dateFormat.includes('d')) {
    options.day = 'numeric'
  }

  return new Intl.DateTimeFormat(undefined, options).format(date)
}

const isSameMonthCheck = (date: Date, month: Date): boolean => {
  return isSameMonth(date, month)
}

const isSameDayCheck = (date: Date, day: Date): boolean => {
  return isSameDay(date, day)
}

const isTodayCheck = (date: Date): boolean => {
  return isToday(date)
}

onMounted(() => {
  setWeekdays()
  updateCalendar()
})
</script>

<template>
  <div
    :class="classes"
    data-testid="qui-calendar"
    role="application"
    aria-label="Calendar"
  >
    <div class="header" data-testid="qui-calendar-header">
      <ButtonComponent
        data-testid="qui-calendar-header-prev"
        variant="ghost"
        size="icon"
        @click="prevMonth"
        aria-label="Previous month"
      >
        <ArrowLeft :size="16" />
      </ButtonComponent>
      <span
        aria-live="polite"
        aria-atomic="true"
        data-testid="qui-calendar-header-month"
        >{{ format(localCurrentMonth, 'MMMM yyyy') }}</span
      >
      <ButtonComponent
        data-testid="qui-calendar-header-next"
        variant="ghost"
        size="icon"
        @click="nextMonth"
        aria-label="Next month"
      >
        <ArrowRight :size="16" />
      </ButtonComponent>
    </div>
    <div class="weekdays" role="row" data-testid="qui-calendar-weekdays">
      <div v-for="day in weekdays" :key="day" role="columnheader">{{ day }}</div>
    </div>
    <div class="days" role="grid" data-testid="qui-calendar-days">
      <div
        v-for="day in days"
        :key="day.toISOString()"
        role="gridcell"
        data-testid="qui-calendar-day"
        @click="handleDayClick(day)"
        @keydown="handleDayKeydown($event, day)"
        tabindex="0"
        :class="{
          outside: !isSameMonthCheck(day, localCurrentMonth),
          today: isTodayCheck(day),
          selected: isSameDayCheck(day, localCurrentDate),
        }"
        :aria-selected="isSameDayCheck(day, localCurrentDate)"
        :aria-label="format(day, 'EEEE, MMMM d, yyyy')"
      >
        {{ format(day, 'd') }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.q-calendar {
  display: inline-block;
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-background);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-4);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-2);
}

.weekdays,
.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: var(--spacing-1);
}

.weekdays div {
  font-weight: var(--font-weight-bold);
  text-align: center;
}

.days div {
  text-align: center;
  padding: var(--spacing-2);
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
}

.days div:hover:not(.selected) {
  background-color: hsl(from var(--color-background-fg) h s l / 10%);
}

.days div:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
}

.days div.outside {
  color: var(--color-muted-fg);
}

.days div.today {
  background-color: hsl(from var(--color-primary) h s l / 33%);
  color: var(--color-muted-fg);
}

.days div.selected {
  background-color: var(--color-primary);
  color: var(--color-primary-fg);
}

.days div.selected.today {
  background-color: var(--color-primary);
  color: var(--color-primary-fg);
}
</style>
