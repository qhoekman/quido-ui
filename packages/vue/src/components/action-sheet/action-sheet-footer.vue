<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface ActionSheetFooterProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<ActionSheetFooterProps>(), {
  asChild: false,
  as: 'div'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-action-sheet-footer']"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-action-sheet-footer {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  padding: var(--spacing-4);
}
</style>
