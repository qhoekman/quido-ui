<script setup lang="ts">
import { MenuTrigger as RekaMenuTrigger } from 'reka-ui'

export interface DropdownMenuTriggerProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<DropdownMenuTriggerProps>(), {
  asChild: false,
  as: 'button'
})
</script>

<template>
  <RekaMenuTrigger
    :as-child="asChild"
    :as="as"
    :class="['q-dropdown-menu-trigger']"
    v-bind="$attrs"
  >
    <slot />
  </RekaMenuTrigger>
</template>

<style scoped>
.q-dropdown-menu-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 0 none;
  cursor: pointer;
  outline: none;
}

.q-dropdown-menu-trigger:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

.q-dropdown-menu-trigger:disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>
