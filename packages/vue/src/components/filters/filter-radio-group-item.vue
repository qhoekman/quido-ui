<script setup lang="ts">
import { computed, inject } from 'vue'
import { useFilterStore, type FilterItemKey } from './useFilterStore'
import { Primitive } from 'reka-ui'
import { Check } from 'lucide-vue-next'

export interface FilterRadioGroupItemProps {
  htmlFor: FilterItemKey
  id: string
  value: string
  disabled?: boolean
  asChild?: boolean
  as?: string
}

const props = defineProps<FilterRadioGroupItemProps>()

const { filters, setFilter } = useFilterStore()

// Try to get context from parent RadioGroup, fallback to direct filter store
const radioGroupContext = inject<{
  selectedValue: { value: string }
  handleValueChange: (value: string) => void
  disabled: { value: boolean }
  name: { value: FilterItemKey }
} | null>('filterRadioGroupContext', null)

const checked = computed(() => {
  if (radioGroupContext) {
    return radioGroupContext.selectedValue.value === props.value
  }
  return filters[props.htmlFor] === props.value
})

const isDisabled = computed(() => {
  return props.disabled || (radioGroupContext?.disabled.value ?? false)
})

const handleClick = () => {
  if (isDisabled.value) return
  if (radioGroupContext) {
    radioGroupContext.handleValueChange(props.value)
  } else {
    setFilter(props.htmlFor, props.value)
  }
}
</script>

<template>
  <div class="q-filter-radio-group-item-container">
    <button
      :id="id"
      :disabled="isDisabled"
      :class="['q-filter-radio-group-item', { 'checked': checked }]"
      @click="handleClick"
      type="button"
      role="radio"
      :aria-checked="checked"
    >
      <span v-if="checked" class="q-filter-radio-group-item-indicator">
        <Check :size="14" />
      </span>
    </button>
    <Primitive
      as="label"
      :for="id"
      :class="['q-filter-radio-group-item-label']"
    >
      <slot />
    </Primitive>
  </div>
</template>

<style scoped>
.q-filter-radio-group-item-container {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

.q-filter-radio-group-item {
  aspect-ratio: 1 / 1;
  height: var(--spacing-4);
  width: var(--spacing-4);
  border-radius: var(--border-radius-full);
  border: var(--border-width-default) solid var(--color-primary);
  color: var(--color-primary);
  box-shadow: var(--box-shadow-sm);
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  outline: none;
  transition: all 0.2s;
}

.q-filter-radio-group-item:focus-visible {
  outline: none;
  box-shadow: 0 0 0 1px var(--color-ring);
}

.q-filter-radio-group-item:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.q-filter-radio-group-item.checked {
  background-color: var(--color-primary);
  color: var(--color-primary-fg);
}

.q-filter-radio-group-item-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
}

.q-filter-radio-group-item-label {
  font-size: var(--font-size-sm);
  cursor: pointer;
  user-select: none;
}
</style>
