<script setup lang="ts">
import { computed, inject } from 'vue'
import { Primitive } from 'reka-ui'

export interface EmptyStateTitleProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<EmptyStateTitleProps>(), {
  asChild: false,
  as: 'h2'
})

// Get size from parent empty-state component
const parentSize = inject<'sm' | 'md' | 'lg'>('emptyStateSize', 'md')

const titleClasses = computed(() => {
  return ['q-empty-state-title', `size--${parentSize}`]
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="titleClasses"
    data-testid="qui-empty-state-title"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-empty-state-title {
  color: var(--color-background-fg);
  text-align: center;
  font-family: var(--font-family-sans);
  font-style: normal;
  font-weight: 500;
  margin: 0;
}

.size--sm {
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
}

.size--md {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-lg);
}

.size--lg {
  font-size: var(--font-size-2xl);
  line-height: var(--line-height-2xl);
}
</style>
