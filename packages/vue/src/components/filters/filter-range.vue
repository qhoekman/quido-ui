<script setup lang="ts">
import { computed } from 'vue'
import { useFilterStore, type FilterItemKey } from './useFilterStore'
import { Primitive } from 'reka-ui'
import RangeComponent from '../range/range.vue'

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
      return JSON.parse(stored) as number[]
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
    <RangeComponent
      :id="props.name ?? props.id"
      :min="props.min"
      :max="props.max"
      :step="props.step"
      :disabled="props.disabled"
      :value="filterValues"
      @update:value="handleChange"
    />
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
</style>
