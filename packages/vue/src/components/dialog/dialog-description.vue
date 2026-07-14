<script setup lang="ts">
import { DialogDescription as RekaDialogDescription } from 'reka-ui'

export interface DialogDescriptionProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<DialogDescriptionProps>(), {
  asChild: false,
  as: 'p'
})
</script>

<template>
  <RekaDialogDescription
    :as-child="asChild"
    :as="as"
    :class="['q-dialog-description']"
    v-bind="$attrs"
  >
    <slot />
  </RekaDialogDescription>
</template>

<style scoped>
.q-dialog-description {
  font-size: var(--font-size-sm);
  color: var(--color-muted-fg);
  margin: 0;
}
</style>
