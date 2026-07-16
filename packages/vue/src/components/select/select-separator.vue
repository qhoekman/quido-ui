<script setup lang="ts">
import { SelectSeparator as SelectSeparatorPrimitive } from 'reka-ui'

export interface SelectSeparatorProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<SelectSeparatorProps>(), {
  asChild: false,
  as: 'div',
})
</script>

<template>
  <SelectSeparatorPrimitive
    :as-child="asChild"
    :as="as"
    :class="['q-select-separator']"
    v-bind="$attrs"
  />
</template>

<style scoped>
.q-select-separator {
  margin-left: calc(-1 * var(--spacing-1));
  margin-right: calc(-1 * var(--spacing-1));
  margin-top: var(--spacing-1);
  margin-bottom: var(--spacing-1);
  height: 1px;
  background-color: var(--color-muted);
}
</style>
