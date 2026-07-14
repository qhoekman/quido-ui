<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface PaginationProps {
  asChild?: boolean
  as?: 'nav'
}

const props = withDefaults(defineProps<PaginationProps>(), {
  asChild: false,
  as: 'nav'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    role="navigation"
    aria-label="pagination"
    :class="['q-pagination']"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
nav,
[role='navigation'] {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
