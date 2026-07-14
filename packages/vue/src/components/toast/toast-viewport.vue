<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface ToastViewportProps {
  asChild?: boolean
}

const props = withDefaults(defineProps<ToastViewportProps>(), {
  asChild: false
})
</script>

<template>
  <Primitive
    :as="asChild ? undefined : 'div'"
    :as-child="asChild"
    class="q-toast-viewport"
    data-testid="qui-toast-viewport"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-toast-viewport {
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  max-height: 100vh;
  width: 100%;
  flex-direction: column-reverse;
  padding: 1rem;
}

@media (width >= 640px) {
  .q-toast-viewport {
    bottom: 0;
    right: 0;
    top: auto;
    flex-direction: column;
  }
}

@media (width >= 768px) {
  .q-toast-viewport {
    max-width: 420px;
  }
}
</style>
