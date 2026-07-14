<script setup lang="ts">
import { computed } from "vue";
import { SliderRoot, SliderTrack, SliderRange, SliderThumb } from "reka-ui";

export interface RangeProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number[];
  defaultValue?: number[];
  disabled?: boolean;
  orientation?: "horizontal" | "vertical";
  onValueChange?: (value: number[]) => void;
}

const props = withDefaults(defineProps<RangeProps>(), {
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  orientation: "horizontal",
});

const emit = defineEmits<{
  "update:value": [value: number[]];
}>();

const handleValueChange = (value: number[]) => {
  emit("update:value", value);
  props.onValueChange?.(value);
};

const sliderValue = computed(() => props.value);
const sliderDefaultValue = computed(() => props.defaultValue);
</script>

<template>
  <SliderRoot
    :min="min"
    :max="max"
    :step="step"
    :value="sliderValue"
    :default-value="sliderDefaultValue"
    :disabled="disabled"
    :orientation="orientation"
    :class="['q-range']"
    @update:value="handleValueChange"
    v-bind="$attrs"
  >
    <SliderTrack :class="['q-range-track']">
      <SliderRange :class="['q-range-range']" />
    </SliderTrack>
    <SliderThumb :class="['q-range-thumb']" />
    <SliderThumb :class="['q-range-thumb']" />
  </SliderRoot>
</template>

<style scoped>
.q-range {
  position: relative;
  display: flex;
  width: 100%;
  touch-action: none;
  user-select: none;
  align-items: center;
}

.q-range-track {
  position: relative;
  height: var(--spacing-1-5);
  width: 100%;
  flex-grow: 1;
  overflow: hidden;
  border-radius: var(--border-radius-full);
  background-color: var(--color-muted);
}

.q-range-range {
  position: absolute;
  height: 100%;
  background-color: var(--color-primary);
}

.q-range-thumb {
  display: block;
  height: var(--spacing-4);
  width: var(--spacing-4);
  border-radius: var(--border-radius-full);
  border: var(--border-width-default) solid var(--color-primary);
  background-color: var(--color-background);
  box-shadow: var(--box-shadow-default);
  transition: colors 0.3s;
}

.q-range-thumb:focus-visible {
  outline: none;
  box-shadow: 0 0 0 1px var(--color-ring);
}

.q-range-thumb:disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>
