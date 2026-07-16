<script setup lang="ts">
import { computed, ref, watch } from "vue";
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverAnchor,
  PopoverContent,
  PopoverPortal,
} from "reka-ui";
import { cva, type VariantProps } from "class-variance-authority";
import InputComponent from "../input/input.vue";
import TimeSelectComponent from "../time-select/time-select.vue";

const timePickerVariants = cva("q-time-picker", {
  variants: {},
  defaultVariants: {},
});

export type TimePickerVariants = VariantProps<typeof timePickerVariants>;

export interface TimePickerProps {
  selectedHour?: string;
  selectedMinute?: string;
  defaultOpen?: boolean;
  open?: boolean;
  disabled?: boolean;
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<TimePickerProps>(), {
  selectedHour: "12",
  selectedMinute: "00",
  defaultOpen: false,
  open: undefined,
  disabled: false,
  asChild: false,
  as: "div",
});

const emit = defineEmits<{
  "update:selectedHour": [hour: string];
  "update:selectedMinute": [minute: string];
  "update:open": [value: boolean];
  valueChange: [time: string];
}>();

// Internal state management
const internalOpen = ref(props.defaultOpen);
const isControlled = computed(() => props.open !== undefined);
const isOpen = computed(() => (isControlled.value ? props.open : internalOpen.value));

const setOpen = (value: boolean) => {
  if (!isControlled.value) {
    internalOpen.value = value;
  }
  emit("update:open", value);
};

const closePopover = () => setOpen(false);

// Time state
const localSelectedHour = ref<string>(props.selectedHour);
const localSelectedMinute = ref<string>(props.selectedMinute);

// Watch for prop changes
watch(
  () => props.selectedHour,
  (newHour) => {
    if (newHour !== undefined) {
      localSelectedHour.value = newHour;
    }
  },
  { immediate: true }
);

watch(
  () => props.selectedMinute,
  (newMinute) => {
    if (newMinute !== undefined) {
      localSelectedMinute.value = newMinute;
    }
  },
  { immediate: true }
);

watch(
  () => props.open,
  (newValue) => {
    if (isControlled.value && newValue !== undefined) {
      internalOpen.value = newValue;
    }
  }
);

const classes = computed(() => {
  return timePickerVariants({});
});

const formatTime = (hour: string, minute: string): string => {
  return `${hour}:${minute}`;
};

const formattedTime = computed(() =>
  formatTime(localSelectedHour.value, localSelectedMinute.value)
);

const handleTimeChange = (time: string) => {
  const [hour, minute] = time.split(":");
  localSelectedHour.value = hour;
  localSelectedMinute.value = minute;
  emit("update:selectedHour", hour);
  emit("update:selectedMinute", minute);
  emit("valueChange", time);
  closePopover();
};

// reka-ui's PopoverRoot has no `disabled` prop and PopoverTrigger always
// toggles on click, so disabling must be enforced by intercepting the click
// before it reaches the trigger's own listener (capture phase on an ancestor).
const handleAnchorClick = (event: MouseEvent) => {
  if (props.disabled) {
    event.stopPropagation();
    event.preventDefault();
  }
};
</script>

<template>
  <PopoverRoot
    :default-open="defaultOpen"
    :open="isOpen"
    :class="classes"
    data-testid="qui-time-picker"
    @update:open="setOpen"
    v-bind="$attrs"
  >
    <PopoverAnchor :as-child="asChild" :as="as" @click.capture="handleAnchorClick">
      <PopoverTrigger
        :as-child="false"
        :as="'div'"
        class="q-time-picker-trigger"
        :aria-disabled="disabled"
        :class="{ 'q-time-picker-trigger--disabled': disabled }"
      >
        <InputComponent
          :model-value="formattedTime"
          readonly
          :disabled="disabled"
          data-testid="qui-time-picker-input"
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
        :class="['q-time-picker-content']"
        role="dialog"
        aria-label="Time picker"
      >
        <TimeSelectComponent
          :selected-hour="localSelectedHour"
          :selected-minute="localSelectedMinute"
          @onChange="handleTimeChange"
        />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>

<style scoped>
.q-time-picker {
  display: inline-block;
  position: relative;
}

.q-time-picker-trigger {
  display: inline-block;
  cursor: pointer;
}

.q-time-picker-trigger--disabled {
  cursor: not-allowed;
}
</style>

<style>
/*
 * Not scoped: PopoverContent renders via Teleport, so scoped selectors
 * would never match the portaled DOM node.
 */
.q-time-picker-content {
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
