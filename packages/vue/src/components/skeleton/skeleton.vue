<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface SkeletonProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<SkeletonProps>(), {
  asChild: false,
  as: 'div'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="q-skeleton"
    data-testid="qui-skeleton"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-skeleton {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  border-radius: var(--border-radius-md);
  background-color: hsl(from var(--color-background-fg) h s l / 10%);
  opacity: 0.1;
}
</style>
