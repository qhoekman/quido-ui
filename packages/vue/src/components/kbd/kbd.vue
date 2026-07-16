<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'

const kbdVariants = cva('q-kbd', {
  variants: {
    variant: {
      default: 'variant--default'
    },
    size: {
      sm: 'size--sm',
      md: 'size--md',
      lg: 'size--lg'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'md'
  }
})

export type KbdVariants = VariantProps<typeof kbdVariants>

export interface KbdProps {
  variant?: KbdVariants['variant']
  size?: KbdVariants['size']
  asChild?: boolean
  as?: 'kbd'
}

const props = withDefaults(defineProps<KbdProps>(), {
  variant: 'default',
  size: 'md',
  asChild: false,
  as: 'kbd'
})

const classes = computed(() => {
  return kbdVariants({
    variant: props.variant,
    size: props.size
  })
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
kbd {
  display: inline-block;
  padding: var(--spacing-0-2) var(--spacing-0-4);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-base);
  border: var(--border-width-default) solid;
  border-radius: var(--border-radius-sm);
  font-family: var(--font-family-mono);
}

.variant--default {
  background-color: var(--color-card);
  color: var(--color-card-fg);
  border-color: var(--color-border);
}

.size--sm {
  font-size: var(--font-size-xs);
  padding: var(--spacing-0-1) var(--spacing-0-3);
}

.size--md {
  font-size: var(--font-size-sm);
  padding: var(--spacing-0-2) var(--spacing-0-4);
}

.size--lg {
  font-size: var(--font-size-base);
  padding: var(--spacing-0-3) var(--spacing-0-5);
}

kbd:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
}
</style>
