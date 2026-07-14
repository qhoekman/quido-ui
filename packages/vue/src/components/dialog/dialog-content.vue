<script setup lang="ts">
import { computed } from 'vue'
import { DialogContent as RekaDialogContent, DialogPortal } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'
import DialogOverlay from './dialog-overlay.vue'
import DialogClose from './dialog-close.vue'

const dialogContentVariants = cva('q-dialog-content', {
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

export type DialogContentVariants = VariantProps<typeof dialogContentVariants>

export interface DialogContentProps {
  size?: DialogContentVariants['size']
  forceMount?: boolean
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<DialogContentProps>(), {
  size: 'md',
  forceMount: false,
  asChild: false,
  as: 'div'
})

const classes = computed(() => {
  return dialogContentVariants({
    size: props.size
  })
})
</script>

<template>
  <DialogPortal>
    <DialogOverlay />
    <RekaDialogContent
      :force-mount="forceMount"
      :as-child="asChild"
      :as="as"
      :class="classes"
      v-bind="$attrs"
    >
      <slot />
      <DialogClose />
    </RekaDialogContent>
  </DialogPortal>
</template>

<style scoped>
.q-dialog-content {
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: var(--z-index-50);
  display: grid;
  width: 100%;
  max-width: var(--columns-lg);
  transform: translate(-50%, -50%);
  gap: var(--spacing-4);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-background);
  padding: var(--spacing-6);
  box-shadow: var(--box-shadow-lg);
  transition-duration: 200ms;
}

.q-dialog-content[data-state="open"] {
  animation: fade-in 0.2s ease-in-out;
}

.q-dialog-content[data-state="closed"] {
  animation: fade-out 0.2s ease-in-out;
}

@media (min-width: 640px) {
  .q-dialog-content {
    border-radius: var(--border-radius-lg);
  }
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

/* Size modifiers */
.size--sm {
  max-width: 300px;
}

.size--md {
  max-width: 500px;
}

.size--lg {
  max-width: 700px;
}
</style>
