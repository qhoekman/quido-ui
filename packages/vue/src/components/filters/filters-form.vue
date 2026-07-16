<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface FiltersFormProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<FiltersFormProps>(), {
  asChild: false,
  as: 'form'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-filters-form']"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-filters-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}
</style>
