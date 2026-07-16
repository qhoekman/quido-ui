<script setup lang="ts">
import { SelectGroup as SelectGroupPrimitive } from 'reka-ui'

export interface SelectGroupProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<SelectGroupProps>(), {
  asChild: false,
  as: 'div',
})
</script>

<template>
  <SelectGroupPrimitive
    :as-child="asChild"
    :as="as"
    :class="['q-select-group']"
    v-bind="$attrs"
  >
    <slot />
  </SelectGroupPrimitive>
</template>

<style scoped>
.q-select-group {
  display: flex;
  flex-direction: column;
}
</style>
