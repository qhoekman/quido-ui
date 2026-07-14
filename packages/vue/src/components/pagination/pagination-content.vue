<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface PaginationContentProps {
  asChild?: boolean
  as?: 'ul'
}

const props = withDefaults(defineProps<PaginationContentProps>(), {
  asChild: false,
  as: 'ul'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-pagination-content']"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  gap: var(--spacing-1);
}
</style>
