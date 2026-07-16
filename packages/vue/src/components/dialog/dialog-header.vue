<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'

export interface DialogHeaderProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<DialogHeaderProps>(), {
  asChild: false,
  as: 'div'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-dialog-header']"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-dialog-header {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1-5);
  text-align: center;
}

@media (min-width: 640px) {
  .q-dialog-header {
    text-align: left;
  }
}
</style>
