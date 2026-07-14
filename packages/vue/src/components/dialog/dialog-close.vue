<script setup lang="ts">
import { DialogClose as RekaDialogClose } from 'reka-ui'
import { X } from 'lucide-vue-next'

export interface DialogCloseProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<DialogCloseProps>(), {
  asChild: false,
  as: 'button'
})
</script>

<template>
  <RekaDialogClose
    :as-child="asChild"
    :as="as"
    :class="['q-dialog-close']"
    v-bind="$attrs"
  >
    <X :size="16" />
    <span class="sr-only">Close</span>
  </RekaDialogClose>
</template>

<style scoped>
.q-dialog-close {
  position: absolute;
  right: var(--spacing-4);
  top: var(--spacing-4);
  border-radius: var(--border-radius-sm);
  opacity: 0.7;
  transition: opacity 0.3s;
  outline: none;
  box-shadow: 0 0 0 0 var(--color-background);
  color: var(--color-background-fg);
  fill: currentColor;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0 none;
  background: transparent;
  cursor: pointer;
  padding: var(--spacing-2);
}

.q-dialog-close:hover {
  opacity: 1;
}

.q-dialog-close:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
}

.q-dialog-close:disabled {
  pointer-events: none;
}

.q-dialog-close[data-state="open"] {
  background-color: var(--color-accent);
  color: var(--color-muted-fg);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
