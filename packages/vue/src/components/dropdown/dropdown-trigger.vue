<script setup lang="ts">
import { DropdownMenuTrigger as RekaDropdownMenuTrigger } from 'reka-ui'

export interface DropdownTriggerProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<DropdownTriggerProps>(), {
  asChild: false,
  as: 'button'
})
</script>

<template>
  <RekaDropdownMenuTrigger
    :as-child="asChild"
    :as="as"
    :class="['q-dropdown-trigger']"
    v-bind="$attrs"
  >
    <slot />
  </RekaDropdownMenuTrigger>
</template>

<style scoped>
.q-dropdown-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 0 none;
  cursor: pointer;
  outline: none;
}

.q-dropdown-trigger:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

.q-dropdown-trigger:disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>
