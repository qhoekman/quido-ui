<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface ActionSheetHeaderProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<ActionSheetHeaderProps>(), {
  asChild: false,
  as: 'div'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-action-sheet-header']"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-action-sheet-header {
  display: grid;
  gap: var(--spacing-1-5);
  padding: var(--spacing-4);
  text-align: center;
}

@media (min-width: 640px) {
  .q-action-sheet-header {
    text-align: left;
  }
}
</style>
