<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { PopoverRoot, PopoverTrigger, PopoverAnchor, PopoverContent } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'
import { startOfMonth } from 'date-fns'
import InputComponent from '../input/input.vue'
import CalendarComponent from '../calendar/calendar.vue'

const datePickerVariants = cva('q-date-picker', {
  variants: {},
  defaultVariants: {},
})

export type DatePickerVariants = VariantProps<typeof datePickerVariants>

export interface DatePickerProps {
  selectedDate?: Date
  defaultOpen?: boolean
  open?: boolean
  disabled?: boolean
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<DatePickerProps>(), {
  selectedDate: () => new Date(),
  defaultOpen: false,
  disabled: false,
  asChild: false,
  as: 'div',
})

const emit = defineEmits<{
  'update:selectedDate': [date: Date]
  'update:open': [value: boolean]
  'valueChange': [date: Date]
}>()

// Internal state management
const internalOpen = ref(props.defaultOpen)
const isControlled = props.open !== undefined
const isOpen = computed(() => (isControlled ? props.open : internalOpen.value))

const setOpen = (value: boolean) => {
  if (!isControlled) {
    internalOpen.value = value
  }
  emit('update:open', value)
}

const closePopover = () => setOpen(false)

// Date state
const localSelectedDate = ref<Date>(props.selectedDate)
const currentMonth = ref<Date>(startOfMonth(props.selectedDate))

// Watch for prop changes
watch(
  () => props.selectedDate,
  (newDate) => {
    if (newDate) {
      localSelectedDate.value = newDate
      currentMonth.value = startOfMonth(newDate)
    }
  },
  { immediate: true }
)

watch(
  () => props.open,
  (newValue) => {
    if (isControlled && newValue !== undefined) {
      internalOpen.value = newValue
    }
  }
)

const classes = computed(() => {
  return datePickerVariants({})
})

const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

const formattedDate = computed(() => formatDate(localSelectedDate.value))

const handleChange = (date: Date) => {
  localSelectedDate.value = date
  currentMonth.value = startOfMonth(date)
  emit('update:selectedDate', date)
  emit('valueChange', date)
  closePopover()
}
</script>

<template>
  <PopoverRoot
    :default-open="defaultOpen"
    :open="isOpen"
    :disabled="disabled"
    :class="classes"
    data-testid="qui-date-picker"
    @update:open="setOpen"
    v-bind="$attrs"
  >
    <PopoverAnchor :as-child="asChild" :as="as">
      <PopoverTrigger :as-child="false" :as="'div'" class="q-date-picker-trigger">
        <InputComponent
          :value="formattedDate"
          readonly
          data-testid="qui-date-picker-input"
        />
      </PopoverTrigger>
    </PopoverAnchor>
    <PopoverContent
      :as-child="false"
      :as="'div'"
      :class="['q-date-picker-content']"
      role="dialog"
      aria-label="Date picker"
    >
      <CalendarComponent
        :current-date="localSelectedDate"
        :current-month="currentMonth"
        @valueChange="handleChange"
      />
    </PopoverContent>
  </PopoverRoot>
</template>

<style scoped>
.q-date-picker {
  display: inline-block;
  position: relative;
}

.q-date-picker-trigger {
  display: inline-block;
  cursor: pointer;
}

.q-date-picker-content {
  margin-top: var(--spacing-2);
  z-index: 50;
}
</style>
