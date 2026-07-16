<script setup lang="ts">
import { DialogOverlay as RekaDialogOverlay } from 'reka-ui'

export interface DialogOverlayProps {
  forceMount?: boolean
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<DialogOverlayProps>(), {
  forceMount: false,
  asChild: false,
  as: 'div'
})
</script>

<template>
  <RekaDialogOverlay
    :force-mount="forceMount"
    :as-child="asChild"
    :as="as"
    :class="['q-dialog-overlay']"
    v-bind="$attrs"
  >
    <slot />
  </RekaDialogOverlay>
</template>

<style scoped>
.q-dialog-overlay {
  position: fixed;
  inset: 0;
  z-index: var(--z-index-50);
  background-color: hsl(from var(--color-background) h s l / 80%);
  backdrop-filter: blur(var(--blur-sm));
}

.q-dialog-overlay[data-state="open"] {
  animation: fade-in 0.2s ease-in-out;
}

.q-dialog-overlay[data-state="closed"] {
  animation: fade-out 0.2s ease-in-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
