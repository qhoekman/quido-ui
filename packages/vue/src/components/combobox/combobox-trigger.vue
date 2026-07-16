<script setup lang="ts">
import { inject, computed } from 'vue'
import { PopoverTrigger, PopoverAnchor } from 'reka-ui'
import { ChevronDown } from 'lucide-vue-next'
import { Primitive } from 'reka-ui'
import type { ComboboxOption } from './combobox.vue'

export interface ComboboxTriggerProps {
  placeholder?: string
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<ComboboxTriggerProps>(), {
  placeholder: 'Select an option',
  asChild: false,
  as: 'button'
})

const comboboxContext = inject<{
  isOpen: ReturnType<typeof computed<boolean>>
  toggle: () => void
  selectedOption: ReturnType<typeof computed<ComboboxOption | null>>
  getSelectedOption: () => ComboboxOption | null
  disabled: ReturnType<typeof computed<boolean>>
}>('comboboxContext')

if (!comboboxContext) {
  throw new Error('ComboboxTrigger must be used within Combobox')
}

const isDisabled = computed(() => comboboxContext.disabled.value)

const displayText = computed(() => {
  const selected = comboboxContext.selectedOption.value
  return selected?.label || props.placeholder
})
</script>

<template>
  <PopoverAnchor as="span" :class="['q-combobox-trigger']" v-bind="$attrs">
    <PopoverTrigger
      :as-child="asChild"
      :as="as"
      :class="['q-combobox-trigger-button']"
      :disabled="isDisabled"
      :aria-disabled="isDisabled"
      role="button"
      aria-controls="combobox-content"
    >
      <span class="q-combobox-trigger-text">{{ displayText }}</span>
      <ChevronDown :size="20" :class="['q-combobox-trigger-icon']" aria-hidden="true" />
    </PopoverTrigger>
  </PopoverAnchor>
</template>

<style scoped>
.q-combobox-trigger {
  display: inline-flex;
  flex: 1 1 auto;
  position: relative;
}

.q-combobox-trigger-button {
  display: inline-flex;
  flex: 1 1 auto;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--border-radius-md);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-input);
  color: var(--color-input-fg);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
  cursor: pointer;
  padding: var(--spacing-3) var(--spacing-2);
  gap: var(--spacing-2);
}

.q-combobox-trigger-button:hover:not(:disabled) {
  border-color: var(--color-border-hover);
}

.q-combobox-trigger-button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
}

.q-combobox-trigger-button:disabled {
  pointer-events: none;
  opacity: 0.5;
}

.q-combobox-trigger-text {
  flex: 1;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.q-combobox-trigger-icon {
  flex-shrink: 0;
  color: var(--color-muted-fg);
  transition: transform 0.2s;
}

.q-combobox-trigger-button[data-state='open'] .q-combobox-trigger-icon {
  transform: rotate(180deg);
}

/* Size variants */
.q-combobox-trigger-button.size--sm {
  height: var(--spacing-9);
  padding: var(--spacing-2) var(--spacing-2);
}

.q-combobox-trigger-button.size--md {
  height: var(--spacing-10);
  padding: var(--spacing-3) var(--spacing-2);
}

.q-combobox-trigger-button.size--lg {
  height: var(--spacing-11);
  padding: var(--spacing-3) var(--spacing-3);
}
</style>
