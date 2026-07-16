<script setup lang="ts">
import { computed } from 'vue'
import { DropdownMenuContent as RekaDropdownMenuContent, DropdownMenuPortal } from 'reka-ui'

export interface DropdownContentProps {
  sideOffset?: number
  forceMount?: boolean
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<DropdownContentProps>(), {
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
      :class="['q-dropdown-content']"
      v-bind="$attrs"
    >
      <slot />
    </RekaDropdownMenuContent>
  </DropdownMenuPortal>
</template>

<style>
/*
 * Not scoped: DropdownMenuContent renders via reka-ui's internal
 * Teleport/Presence machinery, whose actual DOM output never receives
 * Vue's scoped-CSS data-v-* attribute (confirmed via direct DOM
 * inspection). A scoped selector here would silently never match.
 */
.q-dropdown-content {
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
