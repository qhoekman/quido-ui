<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface ComboboxLabelProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<ComboboxLabelProps>(), {
  asChild: false,
  as: 'label'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-combobox-label']"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-combobox-label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  margin: 0;
  margin-bottom: var(--spacing-2);
}
</style>
