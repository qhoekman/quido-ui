<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'

const toastVariants = cva('q-toast', {
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

export type ToastVariants = VariantProps<typeof toastVariants>

export interface ToastProps {
  variant?: ToastVariants['variant']
  asChild?: boolean
}

const props = withDefaults(defineProps<ToastProps>(), {
  variant: 'default',
  asChild: false
})

const classes = computed(() => {
  return toastVariants({
    variant: props.variant
  })
})
</script>

<template>
  <Primitive
    :as-child="asChild"
    :class="classes"
    data-testid="qui-toast"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  box-sizing: border-box;
  padding: var(--spacing-4);
  padding-right: var(--spacing-8);
  border-radius: var(--border-radius-md);
  box-shadow: var(--box-shadow-lg);
  transition: all 0.3s;
}

.variant--default {
  background-color: var(--color-background);
  color: var(--color-background-fg);
}

.variant--destructive {
  background-color: var(--color-danger);
  color: var(--color-danger-fg);
}
</style>
