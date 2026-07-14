<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'

export interface DialogFooterProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<DialogFooterProps>(), {
  asChild: false,
  as: 'div'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-dialog-footer']"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-dialog-footer {
  display: flex;
  flex-direction: column-reverse;
  gap: var(--spacing-2);
}

@media (min-width: 640px) {
  .q-dialog-footer {
    flex-direction: row;
    justify-content: flex-end;
  }
}
</style>
