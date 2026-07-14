<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'

const toastActionVariants = cva('q-toast-action', {
  variants: {
    variant: {
      primary: 'variant--primary',
      secondary: 'variant--secondary',
      destructive: 'variant--destructive',
      ghost: 'variant--ghost',
      outline: 'variant--outline',
      link: 'variant--link'
    },
    size: {
      sm: 'size--sm',
      md: 'size--md',
      lg: 'size--lg',
      icon: 'size--icon'
    }
  },
  defaultVariants: {
    variant: 'outline',
    size: 'sm'
  }
})

export type ToastActionVariants = VariantProps<typeof toastActionVariants>

export interface ToastActionProps {
  variant?: ToastActionVariants['variant']
  size?: ToastActionVariants['size']
  asChild?: boolean
  as?: 'button' | 'a'
  disabled?: boolean
}

const props = withDefaults(defineProps<ToastActionProps>(), {
  variant: 'outline',
  size: 'sm',
  asChild: false,
  as: 'button',
  disabled: false
})

const classes = computed(() => {
  return toastActionVariants({
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
    :disabled="disabled"
    :aria-disabled="disabled"
    data-testid="qui-toast-action"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
button,
a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 0 none;
  gap: var(--spacing-2);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  transition: colors 0.3s;
  outline: none;
  box-shadow: 0 0 0 0 var(--color-background);
  text-decoration: none;
  box-sizing: border-box;
}

button:focus-visible,
a:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

button:not(:disabled),
a:not(:disabled) {
  cursor: pointer;
}

button:disabled,
a:disabled,
button[aria-disabled='true'],
a[aria-disabled='true'] {
  pointer-events: none;
  opacity: 0.5;
}

.variant--primary {
  background-color: var(--color-primary);
  color: var(--color-primary-fg);
}

.variant--primary:hover:not(:disabled) {
  background-color: hsl(from var(--color-primary) h s l / 90%);
}

.variant--secondary {
  background-color: var(--color-secondary);
  color: var(--color-secondary-fg);
}

.variant--secondary:hover:not(:disabled) {
  background-color: hsl(from var(--color-secondary) h s l / 90%);
}

.variant--destructive {
  background-color: var(--color-danger);
  color: var(--color-danger-fg);
}

.variant--destructive:hover:not(:disabled) {
  background-color: hsl(from var(--color-danger) h s l / 90%);
}

.variant--outline {
  border: var(--border-width-default) solid var(--color-neutral-200);
  background-color: transparent;
  color: currentcolor;
}

.variant--outline:hover:not(:disabled) {
  opacity: 0.8;
}

.variant--ghost {
  background-color: transparent;
  color: var(--color-background-fg);
}

.variant--ghost:hover:not(:disabled) {
  background-color: hsl(from var(--color-background-fg) h s l / 5%);
  color: var(--color-background-fg);
}

.variant--link {
  color: var(--color-primary);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.variant--link:hover:not(:disabled) {
  text-decoration: underline;
}

.size--sm {
  border-radius: var(--border-radius-md);
  padding: var(--spacing-1) var(--spacing-2);
}

.size--md {
  padding: var(--spacing-2) var(--spacing-3);
}

.size--lg {
  border-radius: var(--border-radius-md);
  padding: var(--spacing-8);
}

.size--icon {
  height: var(--spacing-9);
  width: var(--spacing-9);
  padding: 0;
}
</style>
