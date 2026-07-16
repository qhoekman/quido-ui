<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface AutocompleteGroupProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<AutocompleteGroupProps>(), {
  asChild: false,
  as: 'ul'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-autocomplete-group']"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-autocomplete-group {
  padding: var(--spacing-2);
  list-style: none;
  margin: 0;
}
</style>
