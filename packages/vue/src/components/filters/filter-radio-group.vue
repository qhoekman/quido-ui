<script setup lang="ts">
import { computed, provide } from 'vue'
import { useFilterStore, type FilterItemKey } from './useFilterStore'
import { Primitive } from 'reka-ui'

export interface FilterRadioGroupProps {
  name: FilterItemKey
  defaultValue?: string
  value?: string
  disabled?: boolean
  required?: boolean
  orientation?: 'horizontal' | 'vertical'
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<FilterRadioGroupProps>(), {
  disabled: false,
  required: false,
  orientation: 'vertical',
  asChild: false,
  as: 'div'
})

const emit = defineEmits<{
  'update:value': [value: string]
}>()

const { filters, setFilter } = useFilterStore()

const selectedValue = computed(() => {
  return filters[props.name] ?? props.value ?? props.defaultValue ?? ''
})

const handleValueChange = (value: string) => {
  setFilter(props.name, value)
  emit('update:value', value)
}

// Provide context to child components
provide('filterRadioGroupContext', {
  selectedValue,
  handleValueChange,
  disabled: computed(() => props.disabled),
  name: computed(() => props.name)
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-filter-radio-group', `orientation--${orientation}`]"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-filter-radio-group {
  display: grid;
  gap: var(--spacing-2);
}

.q-filter-radio-group.orientation--horizontal {
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
}

.q-filter-radio-group.orientation--vertical {
  grid-template-columns: 1fr;
}
</style>
