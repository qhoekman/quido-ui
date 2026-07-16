<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface EmptyStateActionGroupProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<EmptyStateActionGroupProps>(), {
  asChild: false,
  as: 'div'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-empty-state-action-group']"
    data-testid="qui-empty-state-action-group"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-empty-state-action-group {
  display: flex;
  gap: var(--spacing-2);
}

.q-empty-state-action-group :deep(*) {
  width: 100%;
}
</style>
