<script setup lang="ts">
import { CollapsibleTrigger as RekaCollapsibleTrigger } from 'reka-ui'

export interface CollapsibleTriggerProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<CollapsibleTriggerProps>(), {
  asChild: false,
  as: 'button'
})
</script>

<template>
  <RekaCollapsibleTrigger
    :as-child="asChild"
    :as="as"
    :class="['q-collapsible-trigger']"
    v-bind="$attrs"
  >
    <slot />
  </RekaCollapsibleTrigger>
</template>

<style scoped>
.q-collapsible-trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-1) var(--spacing-3);
  color: var(--color-background-fg);
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
}

.q-collapsible-trigger:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

.q-collapsible-trigger:disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>
