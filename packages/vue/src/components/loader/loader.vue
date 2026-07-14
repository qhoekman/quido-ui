<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'
import { RefreshCw } from 'lucide-vue-next'

const loaderVariants = cva('q-loader', {
  variants: {
    variant: {
      spinner: 'variant--spinner'
    }
  },
  defaultVariants: {
    variant: 'spinner'
  }
})

export type LoaderVariants = VariantProps<typeof loaderVariants>

export interface LoaderProps {
  variant?: LoaderVariants['variant']
  active?: boolean
  asChild?: boolean
}

const props = withDefaults(defineProps<LoaderProps>(), {
  variant: 'spinner',
  active: false,
  asChild: false
})

const classes = computed(() => {
  return loaderVariants({
    variant: props.variant
  })
})

const loaderClasses = computed(() => {
  return [
    classes.value,
    {
      active: props.active
    }
  ]
})
</script>

<template>
  <Primitive
    :as="asChild ? undefined : 'div'"
    :as-child="asChild"
    :class="loaderClasses"
    data-testid="qui-loader"
    v-bind="$attrs"
  >
    <slot />
    <RefreshCw v-if="active && variant === 'spinner'" :size="16" />
  </Primitive>
</template>

<style scoped>
div {
  display: none;
  transition: opacity 0.3s;
  opacity: 0;
}

.variant--spinner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  gap: var(--spacing-2);
  border-radius: var(--border-radius-md);
  animation: spin 3.33s linear infinite;
}

.active {
  opacity: 1;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
