<script setup lang="ts">
import { computed } from 'vue'
import { DropdownMenuItem as RekaDropdownMenuItem } from 'reka-ui'

export interface DropdownItemProps {
  inset?: boolean
  disabled?: boolean
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<DropdownItemProps>(), {
  inset: false,
  disabled: false,
  asChild: false,
  as: 'div'
})

const classes = computed(() => {
  return [
    'q-dropdown-item',
    {
      'inset': props.inset
    }
  ]
})
</script>

<template>
  <RekaDropdownMenuItem
    :disabled="disabled"
    :as-child="asChild"
    :as="as"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </RekaDropdownMenuItem>
</template>

<style scoped>
.q-dropdown-item {
  position: relative;
  display: flex;
  cursor: default;
  user-select: none;
  align-items: center;
  gap: var(--spacing-2);
  border-radius: var(--border-radius-sm);
  padding-left: var(--spacing-2);
  padding-right: var(--spacing-2);
  padding-top: var(--spacing-1-5);
  padding-bottom: var(--spacing-1-5);
  font-size: var(--font-size-sm);
  outline: none;
  transition: colors 0.3s;
}

.q-dropdown-item:focus {
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
}

.q-dropdown-item[data-disabled] {
  pointer-events: none;
  opacity: 0.5;
}

.q-dropdown-item.inset {
  padding-left: var(--spacing-8);
}
</style>
