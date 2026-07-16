<script setup lang="ts">
import { PopoverTrigger as RekaPopoverTrigger } from 'reka-ui'

export interface PopoverTriggerProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<PopoverTriggerProps>(), {
  asChild: false,
  as: 'button'
})
</script>

<template>
  <RekaPopoverTrigger
    :as-child="asChild"
    :as="as"
    :class="['q-popover-trigger']"
    v-bind="$attrs"
  >
    <slot />
  </RekaPopoverTrigger>
</template>

<style scoped>
.q-popover-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 0 none;
  cursor: pointer;
  outline: none;
}

.q-popover-trigger:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

.q-popover-trigger:disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>
