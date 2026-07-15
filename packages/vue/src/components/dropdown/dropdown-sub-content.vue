<script setup lang="ts">
import { DropdownMenuSubContent as RekaDropdownMenuSubContent } from 'reka-ui'

export interface DropdownSubContentProps {
  forceMount?: boolean
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<DropdownSubContentProps>(), {
  forceMount: false,
  asChild: false,
  as: 'div'
})
</script>

<template>
  <RekaDropdownMenuSubContent
    :force-mount="forceMount"
    :as-child="asChild"
    :as="as"
    :class="['q-dropdown-sub-content']"
    v-bind="$attrs"
  >
    <slot />
  </RekaDropdownMenuSubContent>
</template>

<style scoped>
.q-dropdown-sub-content {
  z-index: var(--z-index-50);
  min-width: 8rem;
  overflow: hidden;
  border-radius: var(--border-radius-md);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-popover);
  color: var(--color-popover-fg);
  padding: var(--spacing-1);
  box-shadow: var(--box-shadow-lg);
}
</style>
