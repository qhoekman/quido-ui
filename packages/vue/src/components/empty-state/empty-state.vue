<script setup lang="ts">
import { computed, provide } from 'vue'
import { Primitive } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'

const emptyStateVariants = cva('q-empty-state', {
  variants: {
    size: {
      sm: 'size--sm',
      md: 'size--md',
      lg: 'size--lg'
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

export type EmptyStateVariants = VariantProps<typeof emptyStateVariants>

export interface EmptyStateProps {
  size?: EmptyStateVariants['size']
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<EmptyStateProps>(), {
  size: 'md',
  asChild: false,
  as: 'div'
})

const classes = computed(() => {
  return emptyStateVariants({
    size: props.size
  })
})

// Provide size to child components
provide('emptyStateSize', props.size)
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    data-testid="qui-empty-state"
    v-bind="$attrs"
  >
    <slot name="icon" />
    <div class="empty-state__content" data-testid="qui-empty-state-content">
      <slot name="title" />
      <slot name="description" />
    </div>
    <slot name="action-group" />
  </Primitive>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.size--sm {
  max-width: var(--spacing-72);
  gap: var(--spacing-2);
}

.size--md {
  max-width: var(--spacing-96);
  gap: var(--spacing-3);
}

.size--lg {
  max-width: var(--breakpoint-sm);
  gap: var(--spacing-4);
}

.empty-state__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-1);
}
</style>
