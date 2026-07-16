<script setup lang="ts">
import { SelectLabel as SelectLabelPrimitive } from 'reka-ui'

export interface SelectLabelProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<SelectLabelProps>(), {
  asChild: false,
  as: 'div',
})
</script>

<template>
  <SelectLabelPrimitive
    :as-child="asChild"
    :as="as"
    :class="['q-select-label']"
    v-bind="$attrs"
  >
    <slot />
  </SelectLabelPrimitive>
</template>

<style scoped>
.q-select-label {
  padding-left: var(--spacing-2);
  padding-right: var(--spacing-2);
  padding-top: var(--spacing-1-5);
  padding-bottom: var(--spacing-1-5);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
}
</style>
