<script setup lang="ts">
import { DropdownMenuRadioItem as RekaDropdownMenuRadioItem, DropdownMenuItemIndicator } from 'reka-ui'
import { Circle } from 'lucide-vue-next'

export interface DropdownMenuRadioItemProps {
  value: string
  disabled?: boolean
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<DropdownMenuRadioItemProps>(), {
  disabled: false,
  asChild: false,
  as: 'div'
})
</script>

<template>
  <RekaDropdownMenuRadioItem
    :value="value"
    :disabled="disabled"
    :as-child="asChild"
    :as="as"
    :class="['q-dropdown-menu-radio-item']"
    v-bind="$attrs"
  >
    <span class="q-dropdown-menu-radio-indicator">
      <DropdownMenuItemIndicator>
        <Circle :size="8" class="q-dropdown-menu-radio-icon" />
      </DropdownMenuItemIndicator>
    </span>
    <slot />
  </RekaDropdownMenuRadioItem>
</template>

<style scoped>
.q-dropdown-menu-radio-item {
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

.q-dropdown-menu-radio-item:focus {
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
}

.q-dropdown-menu-radio-item[data-disabled] {
  pointer-events: none;
  opacity: 0.5;
}

.q-dropdown-menu-radio-indicator {
  position: absolute;
  left: var(--spacing-2);
  display: flex;
  height: var(--spacing-3-5);
  width: var(--spacing-3-5);
  align-items: center;
  justify-content: center;
}

.q-dropdown-menu-radio-icon {
  height: var(--spacing-2);
  width: var(--spacing-2);
  fill: currentColor;
}
</style>
