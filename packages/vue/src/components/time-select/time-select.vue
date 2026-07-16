<script setup lang="ts">
import { computed, ref, watch, onMounted, nextTick } from "vue";
import { Primitive } from "reka-ui";
import { cva, type VariantProps } from "class-variance-authority";

const timeSelectVariants = cva("q-time-select", {
  variants: {},
  defaultVariants: {},
});

export type TimeSelectVariants = VariantProps<typeof timeSelectVariants>;

export interface TimeSelectProps {
  selectedHour?: string;
  selectedMinute?: string;
  hours?: string;
  minutes?: string;
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<TimeSelectProps>(), {
  selectedHour: "12",
  selectedMinute: "00",
  hours: "00",
  minutes: "00",
  asChild: false,
  as: "div",
});

const emit = defineEmits<{
  "update:selectedHour": [hour: string];
  "update:selectedMinute": [minute: string];
  "valueChange": [time: string];
  onChange: [time: string];
}>();

// Use selectedHour/Minute if provided, otherwise fall back to hours/minutes
const currentHour = ref(props.selectedHour || props.hours);
const currentMinute = ref(props.selectedMinute || props.minutes);

// Generate hour and minute arrays
const generateDefaultHours = (): string[] => {
  return Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, "0"));
};

const generateDefaultMinutes = (): string[] => {
  return Array.from({ length: 12 }, (_, i) =>
    (i * 5).toString().padStart(2, "0")
  );
};

const displayHours = ref<string[]>(generateDefaultHours());
const displayMinutes = ref<string[]>(generateDefaultMinutes());

// Refs for scroll containers
const hourListRef = ref<HTMLElement | null>(null);
const minuteListRef = ref<HTMLElement | null>(null);

// Watch for prop changes
watch(
  () => props.selectedHour,
  (newHour) => {
    if (newHour !== undefined) {
      currentHour.value = newHour;
      nextTick(() => {
        scrollToSelected(newHour, hourListRef.value);
      });
    }
  }
);

watch(
  () => props.selectedMinute,
  (newMinute) => {
    if (newMinute !== undefined) {
      currentMinute.value = newMinute;
      addCurrentMinute(newMinute);
      nextTick(() => {
        scrollToSelected(newMinute, minuteListRef.value);
      });
    }
  }
);

watch(
  () => props.hours,
  (newHour) => {
    if (newHour && props.selectedHour === undefined) {
      currentHour.value = newHour;
      nextTick(() => {
        scrollToSelected(newHour, hourListRef.value);
      });
    }
  }
);

watch(
  () => props.minutes,
  (newMinute) => {
    if (newMinute && props.selectedMinute === undefined) {
      currentMinute.value = newMinute;
      addCurrentMinute(newMinute);
      nextTick(() => {
        scrollToSelected(newMinute, minuteListRef.value);
      });
    }
  }
);

const addCurrentMinute = (minute: string) => {
  if (!displayMinutes.value.includes(minute)) {
    displayMinutes.value.push(minute);
    displayMinutes.value.sort((a, b) => parseInt(a) - parseInt(b));
  }
};

const scrollToSelected = (value: string, list: HTMLElement | null) => {
  if (!list) return;
  const element = list.querySelector(`[aria-selected="true"]`);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
};

const selectHour = (hour: string) => {
  currentHour.value = hour;
  emit("update:selectedHour", hour);
  const time = `${hour}:${currentMinute.value}`;
  emit("valueChange", time);
  emit("onChange", time);
  nextTick(() => {
    scrollToSelected(hour, hourListRef.value);
  });
};

const selectMinute = (minute: string) => {
  currentMinute.value = minute;
  emit("update:selectedMinute", minute);
  const time = `${currentHour.value}:${minute}`;
  emit("valueChange", time);
  emit("onChange", time);
  nextTick(() => {
    scrollToSelected(minute, minuteListRef.value);
  });
};

const handleClickHour = (hour: string) => {
  selectHour(hour);
};

const handleClickMinute = (minute: string) => {
  selectMinute(minute);
};

const handleKeyDownHour = (event: KeyboardEvent, hour: string) => {
  if (event.key === "Enter") {
    selectHour(hour);
  }
};

const handleKeyDownMinute = (event: KeyboardEvent, minute: string) => {
  if (event.key === "Enter") {
    selectMinute(minute);
  }
};

onMounted(() => {
  addCurrentMinute(currentMinute.value);
  nextTick(() => {
    scrollToSelected(currentHour.value, hourListRef.value);
    scrollToSelected(currentMinute.value, minuteListRef.value);
  });
});

const classes = computed(() => {
  return timeSelectVariants({});
});

const isHourSelected = (hour: string) => hour === currentHour.value;
const isMinuteSelected = (minute: string) => minute === currentMinute.value;
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    data-testid="qui-time-select"
    v-bind="$attrs"
  >
    <div
      ref="hourListRef"
      class="time-column"
      data-testid="qui-time-select-hour-list"
    >
      <div
        v-for="hour in displayHours"
        :key="hour"
        data-testid="qui-time-select-hour"
        :class="{ selected: isHourSelected(hour) }"
        :aria-selected="isHourSelected(hour)"
        tabindex="0"
        @click="handleClickHour(hour)"
        @keydown="handleKeyDownHour($event, hour)"
      >
        {{ hour }}
      </div>
    </div>

    <div
      ref="minuteListRef"
      class="time-column"
      data-testid="qui-time-select-minute-list"
    >
      <div
        v-for="minute in displayMinutes"
        :key="minute"
        data-testid="qui-time-select-minute"
        :class="{ selected: isMinuteSelected(minute) }"
        :aria-selected="isMinuteSelected(minute)"
        tabindex="0"
        @click="handleClickMinute(minute)"
        @keydown="handleKeyDownMinute($event, minute)"
      >
        {{ minute }}
      </div>
    </div>
  </Primitive>
</template>

<style scoped>
.q-time-select {
  display: flex;
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-background);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-4);
  width: var(--spacing-32);
}

.time-column {
  flex: 1;
  overflow-y: auto;
  height: 200px;
  scrollbar-width: thin;
  scrollbar-color: var(--color-border) transparent;
}

.time-column div {
  cursor: pointer;
  border-radius: var(--border-radius-md);
  padding: var(--spacing-2) var(--spacing-3);
  text-align: center;
  font-size: var(--font-size-sm);
}

.time-column div.selected {
  background-color: var(--color-primary);
  color: var(--color-primary-fg);
}

.time-column div:hover:not(.selected) {
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
}

.time-column div:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-ring);
}
</style>
