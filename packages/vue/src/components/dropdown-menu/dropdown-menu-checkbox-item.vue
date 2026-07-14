<script setup lang="ts">
import { MenuCheckboxItem as RekaMenuCheckboxItem, MenuItemIndicator } from 'reka-ui'
import { Check } from 'lucide-vue-next'

export interface DropdownMenuCheckboxItemProps {
  checked?: boolean | 'indeterminate'
  disabled?: boolean
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<DropdownMenuCheckboxItemProps>(), {
  checked: false,
  disabled: false,
  asChild: false,
  as: 'div'
})
</script>

<template>
  <RekaMenuCheckboxItem
    :checked="checked"
    :disabled="disabled"
    :as-child="asChild"
    :as="as"
    :class="['q-dropdown-menu-checkbox-item']"
    v-bind="$attrs"
  >
    <span class="q-dropdown-menu-checkbox-indicator">
      <MenuItemIndicator>
        <Check :size="16" class="q-dropdown-menu-checkbox-icon" />
      </MenuItemIndicator>
    </span>
    <slot />
  </RekaMenuCheckboxItem>
</template>

<style scoped>
.q-dropdown-menu-checkbox-item {
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

.q-dropdown-menu-checkbox-item:focus {
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
}

.q-dropdown-menu-checkbox-item[data-disabled] {
  pointer-events: none;
  opacity: 0.5;
}

.q-dropdown-menu-checkbox-indicator {
  position: absolute;
  left: var(--spacing-2);
  display: flex;
  height: var(--spacing-3-5);
  width: var(--spacing-3-5);
  align-items: center;
  justify-content: center;
}

.q-dropdown-menu-checkbox-icon {
  height: var(--spacing-4);
  width: var(--spacing-4);
}
</style>
