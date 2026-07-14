<script setup lang="ts">
import { TooltipTrigger as RekaTooltipTrigger } from 'reka-ui'

export interface TooltipTriggerProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<TooltipTriggerProps>(), {
  asChild: false,
  as: 'button'
})
</script>

<template>
  <RekaTooltipTrigger
    :as-child="asChild"
    :as="as"
    :class="['q-tooltip-trigger']"
    v-bind="$attrs"
  >
    <slot />
  </RekaTooltipTrigger>
</template>

<style scoped>
.q-tooltip-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 0 none;
  cursor: pointer;
  outline: none;
}

.q-tooltip-trigger:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

.q-tooltip-trigger:disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>
