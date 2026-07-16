<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface ActionSheetDescriptionProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<ActionSheetDescriptionProps>(), {
  asChild: false,
  as: 'p'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-action-sheet-description']"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-action-sheet-description {
  font-size: var(--font-size-sm);
  color: var(--color-background-fg);
}
</style>
