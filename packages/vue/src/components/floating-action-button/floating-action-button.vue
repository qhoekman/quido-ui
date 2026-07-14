<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'

const fabVariants = cva('q-floating-action-button', {
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

export type FloatingActionButtonVariants = VariantProps<typeof fabVariants>

export interface FloatingActionButtonProps {
  size?: FloatingActionButtonVariants['size']
  as?: 'button' | 'a'
  asChild?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<FloatingActionButtonProps>(), {
  size: 'md',
  asChild: false,
  disabled: false,
  as: 'button'
})

const classes = computed(() => {
  return fabVariants({
    size: props.size
  })
})

const isDisabled = computed(() => props.disabled)
const role = computed(() => (props.as === 'a' ? 'button' : undefined))
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
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
  position: fixed;
  bottom: var(--spacing-4);
  right: var(--spacing-4);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: var(--color-primary-fg);
  box-shadow: 0 2px 10px rgb(0 0 0 / 20%);
  transition: background-color 0.3s, box-shadow 0.3s;
  cursor: pointer;
  border: 0 none;
  outline: none;
}

button:hover:not(:disabled),
[role='button']:hover:not([aria-disabled='true']) {
  background-color: hsl(from var(--color-primary) h s l / 90%);
  box-shadow: 0 4px 14px rgb(0 0 0 / 30%);
}

button:focus-visible,
[role='button']:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

button:disabled,
[role='button'][aria-disabled='true'] {
  pointer-events: none;
  opacity: 0.5;
}

/* Size modifiers */
.size--sm {
  width: var(--spacing-9);
  height: var(--spacing-9);
}

.size--md {
  width: var(--spacing-10);
  height: var(--spacing-10);
}

.size--lg {
  width: var(--spacing-11);
  height: var(--spacing-11);
}
</style>
