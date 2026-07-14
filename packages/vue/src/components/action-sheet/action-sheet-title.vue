<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface ActionSheetTitleProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<ActionSheetTitleProps>(), {
  asChild: false,
  as: 'h2'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-action-sheet-title']"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-action-sheet-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-none);
  letter-spacing: var(--letter-spacing-tight);
}
</style>
