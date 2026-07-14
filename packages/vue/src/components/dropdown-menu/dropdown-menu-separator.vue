<script setup lang="ts">
import { MenuSeparator as RekaMenuSeparator } from 'reka-ui'

export interface DropdownMenuSeparatorProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<DropdownMenuSeparatorProps>(), {
  asChild: false,
  as: 'div'
})
</script>

<template>
  <RekaMenuSeparator
    :as-child="asChild"
    :as="as"
    :class="['q-dropdown-menu-separator']"
    v-bind="$attrs"
  />
</template>

<style scoped>
.q-dropdown-menu-separator {
  margin-left: calc(var(--spacing-1) * -1);
  margin-right: calc(var(--spacing-1) * -1);
  margin-top: var(--spacing-1);
  margin-bottom: var(--spacing-1);
  height: 1px;
  background-color: var(--color-muted);
}
</style>
