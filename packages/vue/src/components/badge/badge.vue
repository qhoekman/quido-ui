<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'

const badgeVariants = cva('q-badge', {
  variants: {
    variant: {
      primary: 'variant--primary',
      secondary: 'variant--secondary',
      destructive: 'variant--destructive',
      outline: 'variant--outline'
    },
    size: {
      sm: 'size--sm',
      md: 'size--md',
      lg: 'size--lg'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})

export type BadgeVariants = VariantProps<typeof badgeVariants>

export interface BadgeProps {
  variant?: BadgeVariants['variant']
  size?: BadgeVariants['size']
  asChild?: boolean
  as?: 'span' | 'div'
}

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: 'primary',
  size: 'md',
  asChild: false,
  as: 'span'
})

const classes = computed(() => {
  return badgeVariants({
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
span,
div {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-full);
  text-align: center;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  line-height: 1;
  white-space: nowrap;
  position: relative;
  top: calc(var(--spacing-1) * -1);
  margin-left: var(--spacing-1);
}

.variant--primary {
  background-color: var(--color-primary);
  color: var(--color-primary-fg);
}

.variant--secondary {
  background-color: var(--color-secondary);
  color: var(--color-secondary-fg);
}

.variant--destructive {
  background-color: var(--color-danger);
  color: var(--color-danger-fg);
}

.variant--outline {
  border: var(--border-width-default) solid var(--color-input);
  background-color: transparent;
  color: var(--color-background-fg);
}

.size--sm {
  min-width: var(--spacing-3);
  height: var(--spacing-3);
  padding-left: var(--spacing-1);
  padding-right: var(--spacing-1);
  font-size: var(--font-size-xs);
}

.size--md {
  min-width: var(--spacing-4);
  height: var(--spacing-4);
  padding-left: var(--spacing-1-5);
  padding-right: var(--spacing-1-5);
  font-size: var(--font-size-xs);
}

.size--lg {
  min-width: var(--spacing-5);
  height: var(--spacing-5);
  padding-left: var(--spacing-2);
  padding-right: var(--spacing-2);
  font-size: var(--font-size-sm);
}

span:focus-visible,
div:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
}
</style>
