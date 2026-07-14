<script setup lang="ts">
import { DialogTrigger as RekaDialogTrigger } from 'reka-ui'

export interface DialogTriggerProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<DialogTriggerProps>(), {
  asChild: false,
  as: 'button'
})
</script>

<template>
  <RekaDialogTrigger
    :as-child="asChild"
    :as="as"
    :class="['q-dialog-trigger']"
    v-bind="$attrs"
  >
    <slot />
  </RekaDialogTrigger>
</template>

<style scoped>
.q-dialog-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 0 none;
  cursor: pointer;
  outline: none;
}

.q-dialog-trigger:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

.q-dialog-trigger:disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>
