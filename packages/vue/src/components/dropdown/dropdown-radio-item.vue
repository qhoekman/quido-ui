<script setup lang="ts">
import { MenuRadioItem as RekaMenuRadioItem, MenuItemIndicator } from 'reka-ui'
import { Circle } from 'lucide-vue-next'

export interface DropdownRadioItemProps {
  value: string
  disabled?: boolean
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<DropdownRadioItemProps>(), {
  disabled: false,
  asChild: false,
  as: 'div'
})
</script>

<template>
  <RekaMenuRadioItem
    :value="value"
    :disabled="disabled"
    :as-child="asChild"
    :as="as"
    :class="['q-dropdown-radio-item']"
    v-bind="$attrs"
  >
    <span class="q-dropdown-radio-indicator">
      <MenuItemIndicator>
        <Circle :size="8" class="q-dropdown-radio-icon" />
      </MenuItemIndicator>
    </span>
    <slot />
  </RekaMenuRadioItem>
</template>

<style scoped>
.q-dropdown-radio-item {
  position: relative;
  display: flex;
  cursor: default;
  user-select: none;
  align-items: center;
  border-radius: var(--border-radius-sm);
  padding-top: var(--spacing-1-5);
  padding-bottom: var(--spacing-1-5);
  padding-left: var(--spacing-8);
  padding-right: var(--spacing-2);
  font-size: var(--font-size-sm);
  outline: none;
  transition: colors 0.3s;
}

.q-dropdown-radio-item:focus {
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
}

.q-dropdown-radio-item[data-disabled] {
  pointer-events: none;
  opacity: 0.5;
}

.q-dropdown-radio-indicator {
  position: absolute;
  left: var(--spacing-2);
  display: flex;
  height: var(--spacing-3-5);
  width: var(--spacing-3-5);
  align-items: center;
  justify-content: center;
}

.q-dropdown-radio-icon {
  height: var(--spacing-2);
  width: var(--spacing-2);
  fill: currentColor;
}
</style>
