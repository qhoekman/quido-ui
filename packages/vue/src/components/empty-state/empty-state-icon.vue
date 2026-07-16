<script setup lang="ts">
import { computed, inject } from 'vue'
import { Primitive } from 'reka-ui'

export interface EmptyStateIconProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<EmptyStateIconProps>(), {
  asChild: false,
  as: 'div'
})

// Get size from parent empty-state component
const parentSize = inject<'sm' | 'md' | 'lg'>('emptyStateSize', 'md')

const iconClasses = computed(() => {
  return ['q-empty-state-icon', `size--${parentSize}`]
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="iconClasses"
    data-testid="qui-empty-state-icon"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-empty-state-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
}

.size--sm {
  max-width: var(--spacing-12);
  max-height: var(--spacing-12);
}

.size--md {
  max-width: var(--spacing-16);
  max-height: var(--spacing-16);
}

.size--lg {
  max-width: var(--spacing-18);
  max-height: var(--spacing-18);
}

.q-empty-state-icon :deep(*) {
  width: 100%;
  height: 100%;
}
</style>
