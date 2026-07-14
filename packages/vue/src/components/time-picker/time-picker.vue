<script setup lang="ts">
import { computed, ref, watch } from "vue";
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverAnchor,
  PopoverContent,
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
const isControlled = props.open !== undefined;
const isOpen = computed(() => (isControlled ? props.open : internalOpen.value));

const setOpen = (value: boolean) => {
  if (!isControlled) {
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
    if (isControlled && newValue !== undefined) {
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
</script>

<template>
  <PopoverRoot
    :default-open="defaultOpen"
    :open="isOpen"
    :disabled="disabled"
    :class="classes"
    data-testid="qui-time-picker"
    @update:open="setOpen"
    v-bind="$attrs"
  >
    <PopoverAnchor :as-child="asChild" :as="as">
      <PopoverTrigger :as-child="false" :as="'div'" class="q-time-picker-trigger">
        <InputComponent
          :model-value="formattedTime"
          readonly
          data-testid="qui-time-picker-input"
        />
      </PopoverTrigger>
    </PopoverAnchor>
    <PopoverContent
      :as-child="false"
      :as="'div'"
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

.q-time-picker-content {
  margin-top: var(--spacing-2);
  z-index: 50;
}
</style>
