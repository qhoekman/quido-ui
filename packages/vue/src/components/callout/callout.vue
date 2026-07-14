<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'

const calloutVariants = cva('q-callout', {
  variants: {
    variant: {
      default: 'variant--default',
      destructive: 'variant--destructive'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

export type CalloutVariants = VariantProps<typeof calloutVariants>

export interface CalloutProps {
  variant?: CalloutVariants['variant']
  asChild?: boolean
  as?: 'div'
}

const props = withDefaults(defineProps<CalloutProps>(), {
  variant: 'default',
  asChild: false,
  as: 'div'
})

const classes = computed(() => {
  return calloutVariants({
    variant: props.variant
  })
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    role="alert"
    data-testid="qui-callout"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  position: relative;
  width: 100%;
  border-radius: var(--border-radius-lg);
  border: var(--border-width-default) solid;
  padding: var(--spacing-4);
  font-size: var(--font-size-sm);
}

.variant--default {
  background-color: var(--color-card);
  color: var(--color-card-fg);
}

.variant--destructive {
  border-color: var(--color-danger);
  color: var(--color-danger);
}

/* Add padding-left to all children after the first child (for content after indicator) */
div :deep(*:first-child ~ *) {
  padding-left: var(--spacing-9);
}
</style>
