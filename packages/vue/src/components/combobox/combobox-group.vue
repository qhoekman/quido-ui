<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface ComboboxGroupProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<ComboboxGroupProps>(), {
  asChild: false,
  as: 'ul'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-combobox-group']"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-combobox-group {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
