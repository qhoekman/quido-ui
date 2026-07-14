<script setup lang="ts">
import { computed, inject } from 'vue'
import { Primitive } from 'reka-ui'

export interface EmptyStateDescriptionProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<EmptyStateDescriptionProps>(), {
  asChild: false,
  as: 'p'
})

// Get size from parent empty-state component
const parentSize = inject<'sm' | 'md' | 'lg'>('emptyStateSize', 'md')

const descriptionClasses = computed(() => {
  return ['q-empty-state-description', `size--${parentSize}`]
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="descriptionClasses"
    data-testid="qui-empty-state-description"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-empty-state-description {
  color: var(--color-background-fg);
  text-align: center;
  font-family: var(--font-family-sans);
  font-style: normal;
  font-weight: 400;
  margin: 0;
  padding: 0 var(--spacing-2);
}

.size--sm {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
}

.size--md {
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
}

.size--lg {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-lg);
}
</style>
