<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'

const paginationLinkVariants = cva('q-pagination-link', {
  variants: {
    variant: {
      outline: 'variant--outline',
      ghost: 'variant--ghost'
    },
    size: {
      md: 'size--md',
      sm: 'size--sm',
      lg: 'size--lg',
      icon: 'size--icon'
    }
  },
  defaultVariants: {
    variant: 'ghost',
    size: 'icon'
  }
})

export type PaginationLinkVariants = VariantProps<typeof paginationLinkVariants>

export interface PaginationLinkProps {
  variant?: PaginationLinkVariants['variant']
  size?: PaginationLinkVariants['size']
  asChild?: boolean
  as?: 'a'
  isActive?: boolean
}

const props = withDefaults(defineProps<PaginationLinkProps>(), {
  variant: 'ghost',
  size: 'icon',
  asChild: false,
  as: 'a',
  isActive: false
})

const classes = computed(() => {
  return paginationLinkVariants({
    variant: props.isActive ? 'outline' : props.variant,
    size: props.size
  })
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    :aria-current="isActive ? 'page' : undefined"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
a,
[role='button'] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 0 none;
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  transition: colors 0.3s;
  outline: none;
  box-shadow: 0 0 0 0 var(--color-background);
  text-decoration: none;
}

a:focus-visible,
[role='button']:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

a:not(:disabled),
[role='button']:not(:disabled) {
  cursor: pointer;
}

a:disabled,
[role='button'][aria-disabled='true'] {
  pointer-events: none;
  opacity: 0.5;
}

/* Variant modifiers */
.variant--outline {
  color: var(--color-background-fg);
  border: var(--border-width-default) solid var(--color-border);
  background-color: transparent;
}

.variant--outline:hover:not(:disabled) {
  background-color: hsl(from var(--color-background-fg) h s l / 10%);
  color: hsl(from var(--color-background-fg) h s l / 90%);
}

.variant--outline[aria-current='page'] {
  border-color: currentcolor;
}

.variant--ghost {
  background-color: transparent;
  color: var(--color-background-fg);
}

.variant--ghost:hover:not(:disabled) {
  background-color: hsl(from var(--color-background-fg) h s l / 10%);
  color: hsl(from var(--color-background-fg) h s l / 90%);
}

/* Size modifiers */
.size--sm {
  height: var(--spacing-9);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-3);
}

.size--md {
  height: var(--spacing-10);
  padding: var(--spacing-2) var(--spacing-4);
}

.size--lg {
  height: var(--spacing-11);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-8);
}

.size--icon {
  height: var(--spacing-10);
  width: var(--spacing-10);
  padding: 0;
}
</style>
