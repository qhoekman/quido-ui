<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface AutocompleteLabelProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<AutocompleteLabelProps>(), {
  asChild: false,
  as: 'label'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-autocomplete-label']"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-autocomplete-label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  margin: 0;
  margin-bottom: var(--spacing-2);
}
</style>
