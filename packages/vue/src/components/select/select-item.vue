<script setup lang="ts">
import { SelectItem as SelectItemPrimitive, SelectItemIndicator, SelectItemText } from 'reka-ui'
import { Check } from 'lucide-vue-next'

export interface SelectItemProps {
  value: string
  disabled?: boolean
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<SelectItemProps>(), {
  disabled: false,
  asChild: false,
  as: 'div',
})
</script>

<template>
  <SelectItemPrimitive
    :value="value"
    :disabled="disabled"
    :as-child="asChild"
    :as="as"
    :class="['q-select-item']"
    v-bind="$attrs"
  >
    <SelectItemText>
      <slot />
    </SelectItemText>
    <span class="q-select-item-indicator">
      <SelectItemIndicator>
        <Check :size="16" class="q-select-item-check" />
      </SelectItemIndicator>
    </span>
  </SelectItemPrimitive>
</template>

<style scoped>
.q-select-item {
  position: relative;
  display: flex;
  width: 100%;
  cursor: default;
  user-select: none;
  align-items: center;
  border-radius: var(--border-radius-sm);
  padding-top: var(--spacing-1-5);
  padding-bottom: var(--spacing-1-5);
  padding-left: var(--spacing-2);
  padding-right: var(--spacing-8);
  font-size: var(--font-size-sm);
  outline: none;
}

.q-select-item:focus {
  color: var(--color-background-fg);
  background-color: var(--color-muted);
}

.q-select-item[data-disabled] {
  pointer-events: none;
  opacity: 0.5;
}

.q-select-item-indicator {
  position: absolute;
  right: var(--spacing-2);
  display: flex;
  height: var(--spacing-3-5);
  width: var(--spacing-3-5);
  align-items: center;
  justify-content: center;
}

.q-select-item-check {
  height: var(--spacing-4);
  width: var(--spacing-4);
}
</style>
