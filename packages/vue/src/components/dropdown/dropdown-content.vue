<script setup lang="ts">
import { computed } from 'vue'
import { MenuContent as RekaMenuContent, MenuPortal } from 'reka-ui'

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
  <MenuPortal>
    <RekaMenuContent
      :side-offset="sideOffset"
      :force-mount="forceMount"
      :as-child="asChild"
      :as="as"
      :class="['q-dropdown-content']"
      v-bind="$attrs"
    >
      <slot />
    </RekaMenuContent>
  </MenuPortal>
</template>

<style scoped>
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
