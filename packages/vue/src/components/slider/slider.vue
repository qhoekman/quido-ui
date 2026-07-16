<script setup lang="ts">
import { computed } from "vue";
import { SliderRoot, SliderTrack, SliderRange, SliderThumb } from "reka-ui";

export interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  disabled?: boolean;
  orientation?: "horizontal" | "vertical";
  onValueChange?: (value: number) => void;
}

const props = withDefaults(defineProps<SliderProps>(), {
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  orientation: "horizontal",
});

const emit = defineEmits<{
  "update:value": [value: number];
}>();

const handleValueChange = (values: number[]) => {
  const newValue = values[0];
  emit("update:value", newValue);
  props.onValueChange?.(newValue);
};

const sliderValue = computed(() =>
  props.value !== undefined ? [props.value] : undefined
);
const sliderDefaultValue = computed(() =>
  props.defaultValue !== undefined ? [props.defaultValue] : undefined
);
</script>

<template>
  <SliderRoot
    :min="min"
    :max="max"
    :step="step"
    :model-value="sliderValue"
    :default-value="sliderDefaultValue"
    :disabled="disabled"
    :orientation="orientation"
    :class="['q-slider']"
    @update:model-value="handleValueChange"
    v-bind="$attrs"
  >
    <SliderTrack :class="['q-slider-track']">
      <SliderRange :class="['q-slider-range']" />
    </SliderTrack>
    <SliderThumb :class="['q-slider-thumb']" />
  </SliderRoot>
</template>

<style scoped>
.q-slider {
  position: relative;
  display: flex;
  width: 100%;
  touch-action: none;
  user-select: none;
  align-items: center;
}

.q-slider-track {
  position: relative;
  height: var(--spacing-1-5);
  width: 100%;
  flex-grow: 1;
  overflow: hidden;
  border-radius: var(--border-radius-full);
  background-color: var(--color-muted);
}

.q-slider-range {
  position: absolute;
  height: 100%;
  background-color: var(--color-primary);
}

.q-slider-thumb {
  display: block;
  height: var(--spacing-4);
  width: var(--spacing-4);
  border-radius: var(--border-radius-full);
  border: var(--border-width-default) solid var(--color-primary);
  background-color: var(--color-background);
  box-shadow: var(--box-shadow-sm);
  transition: colors 0.3s;
}

.q-slider-thumb:focus-visible {
  outline: none;
  box-shadow: 0 0 0 1px var(--color-ring);
}

.q-slider-thumb:disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>
