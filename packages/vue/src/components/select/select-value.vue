<script setup lang="ts">
import { SelectValue as SelectValuePrimitive } from 'reka-ui'

export interface SelectValueProps {
  placeholder?: string
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<SelectValueProps>(), {
  placeholder: 'Select an option...',
  asChild: false,
  as: 'span',
})
</script>

<template>
  <SelectValuePrimitive
    :as-child="asChild"
    :as="as"
    :class="['q-select-value']"
    :placeholder="placeholder"
    v-bind="$attrs"
  >
    <slot />
  </SelectValuePrimitive>
</template>

<style scoped>
.q-select-value {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
