<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface ToastDescriptionProps {
  asChild?: boolean
  as?: 'p' | 'span' | 'div'
}

const props = withDefaults(defineProps<ToastDescriptionProps>(), {
  asChild: false,
  as: 'p'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="q-toast-description"
    data-testid="qui-toast-description"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-toast-description {
  font-size: var(--font-size-sm);
  opacity: 0.9;
  margin: 0;
}
</style>
