<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface ToastTitleProps {
  asChild?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const props = withDefaults(defineProps<ToastTitleProps>(), {
  asChild: false,
  as: 'h3'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="q-toast-title"
    data-testid="qui-toast-title"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-toast-title {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  margin: 0;
}
</style>
