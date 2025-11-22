<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva('q-button', {
  variants: {
    variant: {
      primary: 'variant--primary',
      secondary: 'variant--secondary',
      destructive: 'variant--destructive',
      outline: 'variant--outline',
      ghost: 'variant--ghost',
      link: 'variant--link'
    },
    size: {
      md: 'size--md',
      sm: 'size--sm',
      lg: 'size--lg',
      icon: 'size--icon'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})

export type ButtonVariants = VariantProps<typeof buttonVariants>

export interface ButtonProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  as?: 'button' | 'a'
  asChild?: boolean
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  asChild: false,
  disabled: false,
  loading: false,
  fullWidth: false
})

const classes = computed(() => {
  return buttonVariants({
    variant: props.variant,
    size: props.size
  })
})

const buttonClasses = computed(() => {
  return [
    classes.value,
    {
      'full-width': props.fullWidth,
      loading: props.loading
    }
  ]
})

const isDisabled = computed(() => props.disabled || props.loading)
const role = computed(() => (props.as === 'a' ? 'button' : undefined))
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="buttonClasses"
    :disabled="isDisabled"
    :aria-disabled="isDisabled"
    :role="role"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
button,
[role='button'] {
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
}

button:focus-visible,
[role='button']:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

button:not(:disabled),
[role='button']:not(:disabled) {
  cursor: pointer;
}

button:disabled,
[role='button'][aria-disabled='true'] {
  pointer-events: none;
  opacity: 0.5;
}

/* Variant modifiers */
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
  color: var(--color-background-fg);
  border: var(--border-width-default) solid var(--color-border);
  background-color: transparent;
}

.variant--outline:hover:not(:disabled) {
  background-color: hsl(from var(--color-background-fg) h s l / 10%);
  color: hsl(from var(--color-background-fg) h s l / 90%);
}

.variant--ghost {
  background-color: transparent;
  color: var(--color-background-fg);
}

.variant--ghost:hover:not(:disabled) {
  background-color: hsl(from var(--color-background-fg) h s l / 10%);
  color: hsl(from var(--color-background-fg) h s l / 90%);
}

.variant--link {
  color: var(--color-primary);
  text-underline-offset: var(--spacing-4);
}

.variant--link:hover:not(:disabled) {
  text-decoration: underline;
}

/* State modifiers */
.loading {
  pointer-events: none;
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

.full-width {
  justify-content: space-between;
  width: 100%;
}
</style>
