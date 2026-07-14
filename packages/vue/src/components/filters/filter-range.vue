<script setup lang="ts">
import { computed } from 'vue'
import { useFilterStore, type FilterItemKey } from './useFilterStore'
import { Primitive } from 'reka-ui'

export interface FilterRangeProps {
  name: FilterItemKey
  min?: number
  max?: number
  step?: number
  labelPrefix?: string
  disabled?: boolean
  defaultValue?: number[]
  value?: number[]
  id?: string
}

const props = withDefaults(defineProps<FilterRangeProps>(), {
  min: 0,
  max: 9999,
  step: 1,
  labelPrefix: '€',
  disabled: false
})

const emit = defineEmits<{
  'update:value': [value: number[]]
}>()

const { filters, setFilter } = useFilterStore()

const filterValues = computed(() => {
  const stored = filters[props.name]
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch {
      return [props.min, props.max]
    }
  }
  return props.value ?? props.defaultValue ?? [props.min, props.max]
})

const handleChange = (value: number[]) => {
  setFilter(props.name, JSON.stringify(value))
  emit('update:value', value)
}
</script>

<template>
  <div class="q-filter-range-container">
    <div class="q-filter-range-label-container">
      <Primitive
        as="label"
        :for="props.name ?? props.id"
        :class="['q-filter-range-label']"
      >
        {{ props.labelPrefix }} {{ filterValues[0] }}
      </Primitive>
      <Primitive
        as="label"
        :for="props.name ?? props.id"
        :class="['q-filter-range-label']"
      >
        {{ props.labelPrefix }} {{ filterValues[1] }}
      </Primitive>
    </div>
    <!-- Note: This component requires a Range component to be implemented -->
    <!-- For now, using a basic input range as placeholder -->
    <div class="q-filter-range-placeholder">
      <input
        :id="props.name ?? props.id"
        :name="props.name"
        type="range"
        :min="props.min"
        :max="props.max"
        :step="props.step"
        :disabled="props.disabled"
        :value="filterValues[0]"
        @input="(e) => handleChange([Number((e.target as HTMLInputElement).value), filterValues[1]])"
        class="q-filter-range-input"
      />
      <input
        type="range"
        :min="props.min"
        :max="props.max"
        :step="props.step"
        :disabled="props.disabled"
        :value="filterValues[1]"
        @input="(e) => handleChange([filterValues[0], Number((e.target as HTMLInputElement).value)])"
        class="q-filter-range-input"
      />
    </div>
  </div>
</template>

<style scoped>
.q-filter-range-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.q-filter-range-label-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.q-filter-range-label {
  font-size: var(--font-size-sm);
  opacity: 0.6;
  cursor: default;
}

.q-filter-range-placeholder {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.q-filter-range-input {
  width: 100%;
  height: var(--spacing-1-5);
  border-radius: var(--border-radius-full);
  background: var(--color-muted);
  outline: none;
  -webkit-appearance: none;
  appearance: none;
}

.q-filter-range-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: var(--spacing-4);
  height: var(--spacing-4);
  border-radius: var(--border-radius-full);
  border: var(--border-width-default) solid var(--color-primary);
  background: var(--color-background);
  box-shadow: var(--box-shadow-default);
  cursor: pointer;
}

.q-filter-range-input::-moz-range-thumb {
  width: var(--spacing-4);
  height: var(--spacing-4);
  border-radius: var(--border-radius-full);
  border: var(--border-width-default) solid var(--color-primary);
  background: var(--color-background);
  box-shadow: var(--box-shadow-default);
  cursor: pointer;
}

.q-filter-range-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.q-filter-range-input:focus-visible {
  outline: none;
  box-shadow: 0 0 0 1px var(--color-ring);
}
</style>
