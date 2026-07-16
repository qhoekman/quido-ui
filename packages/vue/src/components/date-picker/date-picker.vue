<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { PopoverRoot, PopoverTrigger, PopoverAnchor, PopoverContent, PopoverPortal } from 'reka-ui'
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
  open: undefined,
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
const isControlled = computed(() => props.open !== undefined)
const isOpen = computed(() => (isControlled.value ? props.open : internalOpen.value))

const setOpen = (value: boolean) => {
  if (!isControlled.value) {
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
    if (isControlled.value && newValue !== undefined) {
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

// reka-ui's PopoverRoot has no `disabled` prop and PopoverTrigger always
// toggles on click, so disabling must be enforced by intercepting the click
// before it reaches the trigger's own listener (capture phase on an ancestor).
const handleAnchorClick = (event: MouseEvent) => {
  if (props.disabled) {
    event.stopPropagation()
    event.preventDefault()
  }
}
</script>

<template>
  <PopoverRoot
    :default-open="defaultOpen"
    :open="isOpen"
    :class="classes"
    data-testid="qui-date-picker"
    @update:open="setOpen"
    v-bind="$attrs"
  >
    <PopoverAnchor :as-child="asChild" :as="as" @click.capture="handleAnchorClick">
      <PopoverTrigger
        :as-child="false"
        :as="'div'"
        class="q-date-picker-trigger"
        :aria-disabled="disabled"
        :class="{ 'q-date-picker-trigger--disabled': disabled }"
      >
        <InputComponent
          :value="formattedDate"
          readonly
          :disabled="disabled"
          data-testid="qui-date-picker-input"
        />
      </PopoverTrigger>
    </PopoverAnchor>
    <PopoverPortal>
      <PopoverContent
        :as-child="false"
        :as="'div'"
        side="bottom"
        :side-offset="8"
        align="start"
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
    </PopoverPortal>
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

.q-date-picker-trigger--disabled {
  cursor: not-allowed;
}
</style>

<style>
/*
 * Not scoped: PopoverContent renders via Teleport, so scoped selectors
 * would never match the portaled DOM node.
 */
.q-date-picker-content {
  z-index: var(--z-index-50);
  border-radius: var(--border-radius-md);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-popover);
  color: var(--color-popover-fg);
  padding: var(--spacing-2);
  box-shadow: var(--box-shadow-md);
  outline: none;
}
</style>
