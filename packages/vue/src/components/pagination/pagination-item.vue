<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface PaginationItemProps {
  asChild?: boolean
  as?: 'li'
}

const props = withDefaults(defineProps<PaginationItemProps>(), {
  asChild: false,
  as: 'li'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-pagination-item']"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
li {
  list-style: none;
}
</style>
