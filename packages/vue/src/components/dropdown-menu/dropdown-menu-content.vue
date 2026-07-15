<script setup lang="ts">
import { computed } from 'vue'
import { DropdownMenuContent as RekaDropdownMenuContent, DropdownMenuPortal } from 'reka-ui'

export interface DropdownMenuContentProps {
  sideOffset?: number
  forceMount?: boolean
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<DropdownMenuContentProps>(), {
  sideOffset: 4,
  forceMount: false,
  asChild: false,
  as: 'div'
})
</script>

<template>
  <DropdownMenuPortal>
    <RekaDropdownMenuContent
      :side-offset="sideOffset"
      :force-mount="forceMount"
      :as-child="asChild"
      :as="as"
      :class="['q-dropdown-menu-content']"
      v-bind="$attrs"
    >
      <slot />
    </RekaDropdownMenuContent>
  </DropdownMenuPortal>
</template>

<style scoped>
.q-dropdown-menu-content {
  z-index: var(--z-index-50);
  min-width: 8rem;
  overflow: hidden;
  border-radius: var(--border-radius-md);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-popover);
  color: var(--color-popover-fg);
  padding: var(--spacing-1);
  box-shadow: var(--box-shadow-md);
}
</style>
